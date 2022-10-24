import { getServers } from 'api/server';
import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { IServer } from 'upcloud';
import css from 'styled-jsx/css';
import { SearchBar } from 'components/SearchBar/SearchBar';
import Wrapper from 'components/Wrapper';
import { Loader } from 'components/Loader';

const serverEntry = css`
  @import 'color';
  @import 'rem';

  .Server__Title {
    display: inline-block;
    margin-top: 0px;
    margin-left: rem(20px);
  }

  .Server__ContentWrapper {
    display: flex;
    flex-direction: column;
  }

  .Server__Container {
    display: flex;
    align-items: center;
  }

  .Server__Hostname {
    display: block;
    margin-left: rem(20px);
  }

  .Server__Icon {
    width: 25px;
    height: 25px;
    border-radius: 5px;
    display: inline-block;
  }

  .Server__Icon--Active {
    @extend .Server__Icon;
    background-color: color(ui, green);
  }

  .Server__Icon--Stopped {
    @extend .Server__Icon;
    background-color: color(ui, red);
  }

  .Server__Icon--Any {
    @extend .Server__Icon;
    background-color: color(ui, yellow);
  }
`;

interface IServerListItem extends IServer {
  displayed: boolean;
}

const Storages = () => {
  const [servers, setServers] = useState<IServerListItem[]>([]);

  const hasAnyResults = !!servers.find((server) => server.displayed);

  useEffect(() => {
    getServers().then((response) => {
      const serversList = response.data.map(
        ({ hostname, title, uuid, state }) => ({
          hostname,
          title,
          uuid,
          state,
          displayed: true,
        }),
      );
      setServers(serversList);
    });
  }, []);

  function search(searchTerm: string): void {
    if (!searchTerm) {
      if (servers.find((server) => !server.displayed)) {
        setServers(
          servers.map((server) => ({
            ...server,
            displayed: true,
          })),
        );
      }
    } else {
      const matchingServers = servers.map((server) => {
        server.displayed =
          server.hostname.includes(searchTerm) ||
          server.title.includes(searchTerm);
        return server;
      });
      setServers(matchingServers);
    }
  }

  function getClassName(state: IServer['state']): string {
    switch (state) {
      case 'started':
        return 'Server__Icon--Active';
      case 'stopped':
        return 'Server__Icon--Stopped';
      default:
        return 'Server__Icon--Any';
    }
  }

  function generateCardContent(): JSX.Element | JSX.Element[] {
    if (!hasAnyResults) {
      return <span>No results found</span>;
    }
    return (
      !!servers.length &&
      servers.map(
        (server) =>
          server.displayed && (
            <Card.Section key={server.uuid}>
              <Wrapper>
                <style jsx>{serverEntry}</style>
                <div className="Server__Container">
                  <i className={getClassName(server.state)}></i>
                  <div className="Server__ContentWrapper">
                    <h3 className="Server__Title">{server.title}</h3>
                    <span className="Server__Hostname">
                      Hostname: {server.hostname}
                    </span>
                  </div>
                </div>
              </Wrapper>
            </Card.Section>
          ),
      )
    );
  }

  return !servers.length ? (
    <Loader></Loader>
  ) : (
    <>
      <SearchBar search={search} />
      <Card>
        <Card.Head title="Servers" />
        <Card.Content>{generateCardContent()}</Card.Content>
      </Card>
    </>
  );
};

export default Storages;
