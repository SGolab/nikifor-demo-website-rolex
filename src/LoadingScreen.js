import {useProgress} from '@react-three/drei'

function LoadingScreen() {

    const {progress} = useProgress()

    const mainContainerStyle = {
        backgroundColor: 'black',

        width: '100vw',
        height: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const contentContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const rolexTextStyle = {
        color: 'white'
    }

    const progressBarStyle = {
        width: '300px',
        height: '5px',
        backgroundColor: 'darkred'
    }

    const fillStyle = {
        width: `${progress * 0.01 * 300}px`,
        height: '100%',
        backgroundColor: '#f54029'
    }

    return (
        <div style={mainContainerStyle}>
            {/*<div style={contentContainerStyle}>*/}
                {/*<div style={rolexTextStyle}>Rolex</div>*/}
                <div style={progressBarStyle}>
                    <div style={fillStyle}></div>
                </div>
            {/*</div>*/}
        </div>
    )
}

export default LoadingScreen;
