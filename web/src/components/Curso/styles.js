import styled from 'styled-components'

export const CourseImg = styled.div `
width: 100%;
height: 100%;

    .video {
        overflow: hidden;
        width: 360px;
        height: 280px;
        box-shadow: inset -16px 16px 56px rgba(251, 234, 255, 0.32);

            img {
                min-height: 280px;
                max-width: 460px;
            }
            .cover {
                height: 280px;
                width: 360px;
                position: absolute;
                background-color: rgba(0, 0, 0 , 0.6);
                top: 0;
                left: 0;

                a {
                    margin: 10px 0 0 30px;
                    position: absolute;
                    color: #fff;
                }

                span {
                    position: absolute;
                    color: #fff;
                    left: 155px;
                    right: 155px;
                    top: 115px;
                    bottom: 115px;
                }
            }


    }
`

export const ContainerBox = styled.div`
width: 100%;
height: 100%;
margin-top: 19px;

    span {
        padding: 0 4px 6px;

        :first-child {
            margin: 0 18px 0 31px;
            border-bottom: 1px solid #004F8C;

            color: #004F8C;
        }


    }

    .classes {
        margin-top: 40px;
        height: 100%;

        .shadoww {
            box-shadow: inset -16px 16px 56px rgba(251, 234, 255, 0.32);
        }

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 66px;
            line-height:66px;
            border-bottom: 1px solid rgba(92, 92, 92, 0.24);
            
            
            p {
                /* display: flex; */
                margin-left: 33px;
                font-weight: bold;
                font-size: 16px;
                color: #000040;


            }

            .play-class {
                    
                    padding: 35px 10px 20px 39px;
                    /* line-height: 66px; */
                    color: #000040;
                    border: 0;
                }
        }
    }
`