import './PikachuStorm.scss';

export default function PikachuStorm() {
    return (
        <div classNameName="pikachustorm">
            <div className="container">
                <div className="left-ear">
                    <div className="punta"></div>
                </div>
                <div className="right-ear">
                    <div className="fillear"></div>
                </div>
                <div className="pik-body">
                    <img
                        className="shock-left"
                        src="http://www.megghy.com/gif_animate/natura/tuoni/3.gif"
                        alt=""
                    />
                    <img
                        className="shock-right"
                        src="http://www.megghy.com/gif_animate/natura/tuoni/3.gif"
                        alt=""
                    />
                    <div className="pik-head">
                        <div className="eye-left"></div>
                        <div className="eye-right"></div>
                        <div className="cheek-right"></div>
                        <div className="nose"></div>
                        <div className="mouth"></div>
                    </div>

                    <div className="mid">
                        <div className="left-hand"></div>
                        <div className="right-hand"></div>
                        <div className="mark1"></div>
                        <div className="mark2"></div>
                    </div>

                    <div className="left-foot"></div>
                    <div className="right-foot"></div>
                </div>
                <div className="tail">
                    <div className="part1"></div>
                    <div className="part2"></div>
                    <div className="part3"></div>
                    <div className="part4"></div>
                    <div className="part5"></div>
                </div>
            </div>
        </div>
    );
}
