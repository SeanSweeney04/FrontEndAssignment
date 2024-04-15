import { Outlet, Link} from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/Degrees"> All Degrees</Link>
          </li>
          <li>
            <Link to="/Cohorts"> All Cohorts</Link>
          </li>

          <li>
            <Link to="/Modules"> All Modules</Link>
          </li>
          <li>
            <Link to="/SearchStudent/:studentID">Students</Link>
          </li>

          <li>
            <Link to="/CreateNewDegreePage"> Create new degree</Link>
          </li>
          <li>
            <Link to="/CreateNewCohortPage"> Create new cohort</Link>
          </li>

          <li>
            <Link to="/CreateNewModulePage"> Create new module</Link>
          </li>

          <li>
            <Link to="/CreateNewStudentPage"> Create new student</Link>
          </li>
           
           <li>
          <Link to="/SetModuleGrade">Set module grade</Link>
          </li>

          {/* <li>
            <Link to="/Singledegrees/:degreeID"></Link>
          </li>

          <li>
            <Link to="/Singlecohorts/:cohortID"></Link>
          </li>

          <li>
            <Link to="/Singlemodules/:moduleID"></Link>
          </li>
          
          <li>
            <Link to="/SingleCohortModules/:cohortID"></Link>
          </li>
 */}
          

         

         

          
        </ul>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;