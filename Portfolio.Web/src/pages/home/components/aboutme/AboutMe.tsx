import styles from './AboutMe.module.scss';
import aboutMeJson from './aboutme.json';
import Bicycle from '../../../../components/glyphs/Bicycle';

const AboutMe = () => {
    return (
        <div id="aboutme">
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
