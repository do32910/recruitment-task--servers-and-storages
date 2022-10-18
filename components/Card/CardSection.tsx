import React from 'react';
import { commonCardStyles, cardSectionStyles } from './styles';

interface ICardHeadProps {
  children: React.ReactNode;
}

/**
 * Sections for the <Card> component; adds separators between sections. Should be placed inside <Card.Content>
 */
export const CardSection = ({ children }: ICardHeadProps) => (
  <div className="Card__Section Card__Padding">
    <style jsx>{commonCardStyles}</style>
    <style jsx>{cardSectionStyles}</style>
    {children}
  </div>
);
