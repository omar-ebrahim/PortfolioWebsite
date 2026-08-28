import { Studio } from 'sanity';
import studioConfig from '../../sanity/studio-config';

const StudioPage = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Studio config={studioConfig} />
        </div>
    );
};

export default StudioPage;
