import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  @import 'rem';

  .wrapper {
    margin: 0 auto;
    max-width: 800px;
    padding: 0 rem(10px);

    @media (min-width: 1000px) {
      padding: 0 rem(15px);
    }
  }
`;

interface IWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Wraps the children with the commonly used wrapper with the specified
 * standard max-width and padding.
 *
 * @param className Custom classname for custom CSS etc.
 * @param children Child React nodes
 */
const Wrapper = ({ className, children }: IWrapperProps) => (
  <div className={`wrapper ${className}`}>
    <style jsx>{styles}</style>
    {children}
  </div>
);

export default Wrapper;
