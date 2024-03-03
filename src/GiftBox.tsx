import React from 'react';

type Props = {};

const GiftBox = (props: Props) => {
    return (
        <div className="container">
            <div className="col-12 mt-5 d-flex justify-content-center">
                <div className="box">
                    <div className="box-body">
                        <img
                            width={200}
                            height={200}
                            alt="goodnight"
                            loading="lazy"
                            className="img"
                            src="https://i.pinimg.com/originals/19/d9/a2/19d9a257d75260d4511d014008429901.gif"
                        />
                        <div className="box-lid">
                            <div className="box-bowtie"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftBox;
