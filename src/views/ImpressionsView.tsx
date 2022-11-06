import React, { FC, useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';

import ImpressionItem, { ImpressionItemInfo } from '../components/ImpressionItem';

import { ProfileContext } from '../pages/Popup/contexts';
import { getAds } from '../services/graphql.service';


const ImpressionsView: FC = () => {
    const profile = useContext(ProfileContext);
    const [impressions, setImpressions] = useState<ImpressionItemInfo[]>([]);

    useEffect(() => {
        (async () => {
            const ads = await getAds(profile.id);

            const displayAds = ads.map((a) => ({
                id: a.requestId,
                name: a.from,
                profileImageUrl: "https://placekitten.com/300/300",
                value: Number(ethers.utils.formatEther(a.amount)),
                opened: false,
            })).filter((a) => a.value > 0);

            setImpressions(displayAds);
        })();
    }, []);

    return (
        <div>
            {
                impressions.map((i) => {
                    return (<ImpressionItem key={i.id} {...i} />)
                })
            }
        </div>
    )
}

export default ImpressionsView;