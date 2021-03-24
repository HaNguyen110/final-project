import React, { memo } from "react";
import Link from 'next/link'
import styles from './Navigation.module.css'


type Item = {
  id?: number;
  label?: string;
};

type Props = {
  menu?: Item[];
  classNames?: string;
};

const Navigation: React.FC<Props> = ({ menu = [], classNames = '' }) => {
  return (
    <>
      {menu.map((item, index) => {
        return (
          <div className={`${classNames} `} key={`${index}-${item.label}`}>
            <div className="styles.nav nav justify-content-center">
              <Link href="/">{item.label}</Link>
            </div>
            
          </div>
        );
      })}
    </>
  );
};

export default memo(Navigation);
