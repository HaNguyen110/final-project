import React, {memo} from "react";
import Image from 'next/image';
 

type Props = {
    logo: {
        url: string;
        alt: string;
    };
};

const Logo: React.FC<Props> = ({logo = {url:'', alt:''}}) => {
    return (
        <Image src="/images/logo.png" alt="logo" width={201} height={86} />
    )
}

export default memo(Logo);