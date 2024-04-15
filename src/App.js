import './App.css';
import Degrees from './components/ViewAllDegrees'
import Modules from './components/ViewAllModules';
import Home from './components/Home'
import Layout  from './components/Layout';
import CreateNewDegreePage from './components/CreateNewDegree';
import CreateNewCohortPage from './components/CreateNewCohort';
import CreateNewModulePage from './components/CreateNewModule';
import CreateNewStudentPage from './components/CreateNewStudent';
import SingleCohortModules from './components/SingleCohortModules';
import Singledegrees from './components/ViewSingleDegree';
import Singlecohort from './components/ViewSingleCohort';
import Singlemodules from './components/ViewSingleModule';
import Cohorts from './components/Cohorts'
import SearchStudent from './components/SearchStudent';
import SetModuleGrade from './components/SetModuleGrade';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
  
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Degrees" element={<Degrees />} />
          <Route path="Cohorts" element={<Cohorts />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="CreateNewDegreePage" element={<CreateNewDegreePage />} />
          <Route path="CreateNewCohortPage" element={<CreateNewCohortPage />} />
          <Route path="CreateNewModulePage" element={<CreateNewModulePage />} />
          <Route path="CreateNewStudentPage" element={<CreateNewStudentPage />} />
          <Route path="Singledegrees/:degreeID" element={<Singledegrees/>} />
          <Route path="Singlecohorts/:cohortID" element={<Singlecohort/>} />
          <Route path="Singlemodules/:moduleID" element={<Singlemodules/>} />
          <Route path="SingleCohortModules/:cohortID" element={<SingleCohortModules/>} />
          <Route path="SearchStudent/:studentID" element={<SearchStudent/>} />
          <Route path="SetModuleGrade" element={<SetModuleGrade/>} />





          </Route>
          </Routes>
          </BrowserRouter>
        
      </header>
    </div>
    
  );
}



export default App;
