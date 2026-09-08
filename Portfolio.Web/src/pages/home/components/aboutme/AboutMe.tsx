import styles from './AboutMe.module.scss';
import { PortableText } from '@portabletext/react';
import Bicycle from '../../../../components/glyphs/Bicycle';
import { sectionIds } from '../../../../utils/utils';
import { useEffect, useState } from 'react';
import type { AboutMeContent } from '../../../../sanity/content';
import { fetchAboutMe } from '../../../../sanity/api/about-me';

const AboutMe = () => {

    const [content, setContent] = useState<AboutMeContent | null>(null);

    useEffect(() => {
        fetchAboutMe().then(setContent);
    }, []);

    return (
        <div className={styles.sectionWrapper} id={sectionIds.about}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.heading}>About me</div>
                    {content && <PortableText value={content.aboutMe} />}
                </div>
                <div className={styles.rightContent}>
                    <Bicycle className={styles.glyph} size={196} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
