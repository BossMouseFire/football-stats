import React from 'react';
import { CompetitionCard } from '../CompetitionCard/CompetitionCard';

import styles from './CompetitionList.module.scss';
import { CompetitionListProps } from './CompetitionListProps';

export const CompetitionList: React.FC<CompetitionListProps> = ({
    competitionList,
}) => {
    return (
        <div className={styles.competitions}>
            {competitionList.map((competition) => {
                return (
                    <CompetitionCard
                        key={competition.id}
                        competition={competition}
                    />
                );
            })}
        </div>
    );
};
