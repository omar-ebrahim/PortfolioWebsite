import styles from './AboutMe.module.scss';
import aboutMeJson from './aboutme.json';
import Bicycle from '../../../../components/glyphs/Bicycle';
import { sectionIds } from '../../../../utils/utils';

const AboutMe = () => {
    return (
        <div id={sectionIds.about}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.heading}>About me</div>
                    {aboutMeJson.intro}
                </div>
                <div className={styles.rightContent}>
                    <Bicycle className={styles.glyph} size={196} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
