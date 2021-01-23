import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { useScoremanBasePath } from './hooks/useScoremanBasePath';
import { CommentatorsOverlay } from './overlays/commentators/CommentatorsOverlay';
import { InGameWideScreenOverlay } from './overlays/ingame-widescreen/InGameWidescreenOverlay';
import './scoreman.css';

const App = () => {
    const basePath = useScoremanBasePath();

    return basePath ? <div>
        <Router basename={basePath}>
            <Switch>
                <Route path="/ingame-widescreen">
                    <InGameWideScreenOverlay />
                </Route>

                <Route path="/commentators">
                    <CommentatorsOverlay />
                </Route>

                <Redirect path="/" exact to="/ingame-widescreen" />
            </Switch>
        </Router>
    </div> : <div>loading</div>
}

export default App;