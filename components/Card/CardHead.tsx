import React from 'react';
import { commonCardStyles, cardHeadStyles } from './styles';

interface ICardHeadProps {
  /** title for the card */
  title: React.ReactNode;
}

/**
 * Generic head element for <Card> component, should be first child inside <Card>
 */
export const CardHead = ({ title }: ICardHeadProps) => (
  <div className="Card__Head Card__Padding">
    <style jsx>{commonCardStyles}</style>
    <style jsx>{cardHeadStyles}</style>
    <h2>{title}</h2>
  </div>
);
