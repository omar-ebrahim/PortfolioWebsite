import styles from './MiddleSection.module.scss';
import middleSectionJson from './middlesection.json';
import Bicycle from '../../../../components/glyphs/Bicycle';

const MiddleSection = () => {
    return (
        <div>
            <div className={styles.heading}>About me</div>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    {middleSectionJson.intro}
                </div>
                <div className={styles.rightContent}>
                    {/* <img src={BikeSvg} /> */}
                    <Bicycle className={styles.glyph} size={256} />
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;
