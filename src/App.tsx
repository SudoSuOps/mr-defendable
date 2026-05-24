import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FromTheDesk from './pages/FromTheDesk';
import FromTheDeskPost from './pages/FromTheDeskPost';
import FlightSheets from './pages/FlightSheets';
import Tribunal from './pages/Tribunal';
import StreetLedger from './pages/StreetLedger';
import DefendAPedia from './pages/DefendAPedia';
import RequestProposal from './pages/RequestProposal';
import BoardRoom from './pages/BoardRoom';
import Assignments from './pages/Assignments';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/from-the-desk" element={<FromTheDesk />} />
        <Route path="/from-the-desk/:slug" element={<FromTheDeskPost />} />
        <Route path="/flight-sheets" element={<FlightSheets />} />
        <Route path="/tribunal" element={<Tribunal />} />
        <Route path="/street-ledger" element={<StreetLedger />} />
        <Route path="/defend-a-pedia" element={<DefendAPedia />} />
        <Route path="/request-proposal" element={<RequestProposal />} />
        <Route path="/board-room" element={<BoardRoom />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
