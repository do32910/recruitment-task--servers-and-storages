import React from 'react';
import { cardContentStyles, commonCardStyles } from './styles';

interface ICardContentProps {
  children: React.ReactNode;
}

/**
 * Wrapper for content inside <Card>, adds padding and some generic <p> styling.
 * @param children React children nodes
 */
export const CardContent = ({ children }: ICardContentProps) => (
  <div className="Card__Content Card__Padding">
    <style jsx>{commonCardStyles}</style>
    <style jsx>{cardContentStyles}</style>
    {children}
  </div>
);
