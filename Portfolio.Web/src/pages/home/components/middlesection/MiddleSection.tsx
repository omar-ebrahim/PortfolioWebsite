import styles from './MiddleSection.module.scss';

import middleSectionJson from './middlesection.json';

const MiddleSection = () => {
    return (
        <div>
            <div className={styles.heading}>About me</div>;
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    {middleSectionJson.intro}
                </div>
                <div className={styles.rightContent}>world</div>
            </div>
        </div>
    );
};

export default MiddleSection;
