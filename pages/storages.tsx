import { getStorages } from 'api/storage';
import { Loader } from 'components/Loader';
import Wrapper from 'components/Wrapper';
import React, { useEffect, useState } from 'react';
import { IStorage } from 'upcloud';
import { Card } from '../components/Card';
import css from 'styled-jsx/css';

const storageListItem = css`
  @import 'color';
  @import 'rem';

  li {
    > .Storage__Name {
      font-weight: 600;
    }
    > .Storage__Size {
      color: color(grey, disabled-text);
    }
  }
`;

const Storages = () => {
  const [storages, setStorages] = useState<IStorage[]>([]);

  useEffect(() => {
    getStorages().then((response) => {
      const storagesList = response.data.map(({ size, title, uuid, type }) => ({
        size,
        title,
        uuid,
        type: type,
      }));
      setStorages(storagesList);
    });
  }, []);

  return !storages.length ? (
    <Loader></Loader>
  ) : (
    <Card>
      <Card.Head title="Storages" />
      <Card.Content>
        <Wrapper>
          <style jsx>{storageListItem}</style>
          {storages.map((storage) => (
            <li key={storage.uuid}>
              <span className="Storage__Name">{storage.title}</span>
              <span className="Storage__Size"> ({storage.size} GB)</span>
            </li>
          ))}
        </Wrapper>
      </Card.Content>
    </Card>
  );
};

export default Storages;
