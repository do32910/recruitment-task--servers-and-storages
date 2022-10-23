import { getStorages } from 'api/storage';
import React, { useEffect, useState } from 'react';
import { IStorage } from 'upcloud';
import { Card } from '../components/Card';

const Storages = () => {

  const [storages, setStorages ] = useState<IStorage[]>([]);

  useEffect(function() {
    getStorages().then(res => {
      const storagesList = res.data.map(el => ({
        size: el.size,
        title: el.title,
        uuid: el.uuid,
        type: el.type
      }));
      setStorages(storagesList);
    })
  }, []);
return (
  <Card>
    <Card.Head title="Storages"/>
    <Card.Content>
      {storages.map(storage => (
        <li key={storage.uuid}><b>{storage.title}</b> ({storage.size}GB)</li>
      ))}
    </Card.Content>
  </Card>
)
}

export default Storages;