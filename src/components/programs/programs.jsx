import './programs.css'
import program1 from '../../../public/assets/program1.png';
import program2 from '../../../public/assets/program2.png';
import program3 from '../../../public/assets/program3.png'
import programicon1 from '../../../public/assets/programicon1.png';
import programicon2 from '../../../public/assets/programicon2.png';
import programicon3 from '../../../public/assets/programicon3.png';


const Programs = () => {
    return(
        <>
        <div className="programs">
            <div className="program"><img src={program1} alt="" />
            <div className="caption">
                <img src={programicon1} alt="" />
                <p>Graduation Degree</p>
            </div>
            </div>
            <div className="program"><img src={program2} alt="" />
            <div className="caption">
                <img src={programicon2} alt="" />
                <p>Master Degree</p>
            </div>
            </div>
            <div className="program"><img src={program3} alt="" />
            <div className="caption">
                <img src={programicon3} alt="" />
                <p>Post Graduation</p>
            </div>
            </div>
            
        </div>
        </>
    )
}
export default Programs;