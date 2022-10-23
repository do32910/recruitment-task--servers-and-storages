import { getServers } from 'api/server';
import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { IServer, } from 'upcloud';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { serverEntry } from 'components/Card/styles';
import Wrapper from 'components/Wrapper';

const Storages = () => {

  const [ servers, setServers ] = useState<IServer[]>([]);
  const [ filteredServers, setFilteredServers ] = useState<IServer[]>([]);

  useEffect(() => {
    getServers().then(response => {
    const serversList = response.data.map(({hostname, title, uuid, state}) => ({
      hostname,
      title,
      uuid,
      state,
    }))
    setServers(serversList);
    setFilteredServers(serversList);
    });
  }, []);

  function search(searchTerm: string): void {
    if(!searchTerm) {
      setFilteredServers(servers);
    }
    setFilteredServers(servers.filter(server => server.hostname.includes(searchTerm) || server.title.includes(searchTerm)));
  }

  function getClassName(state: IServer['state']) {
    switch(state) { 
      case "started":
        return "Server__Icon__Active";
      case "stopped":
        return "Server__Icon__Stopped";
      default:
        return "Server__Icon__Any"
    }
  }

  return (
    <>
      <SearchBar search={search}/>
      <Card>
        <Card.Head title="Servers"/>
        <Card.Content>
          {
            !!filteredServers.length && filteredServers.map(server => (
              <Card.Section key={server.uuid}>
                <Wrapper>
                <style jsx>{serverEntry}</style>
                <div className='Server__Entry'>
                  <i className={getClassName(server.state)}></i>
                  <div className='Server__SingleEntry'>
                    <h3 className='Server__Title'>{server.title}</h3>
                    <span className='Server__Hostname'>Hostname: {server.hostname}</span>
                  </div>
                </div>
                </Wrapper>
              </Card.Section>
            ))
          }
        </Card.Content>
      </Card>
    </>
  )
}

export default Storages;