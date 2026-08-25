import styles from './MiddleSection.module.scss';
import middleSectionJson from './middlesection.json';
import Bicycle from '../../../../components/glyphs/Bicycle';

const MiddleSection = () => {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div id="aboutme" className={styles.heading}>
                        About me
                    </div>
                    {middleSectionJson.intro}
                </div>
                <div className={styles.rightContent}>
                    <Bicycle className={styles.glyph} size={196} />
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;
