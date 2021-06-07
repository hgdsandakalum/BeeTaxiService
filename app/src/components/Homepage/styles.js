import { makeStyles, fade } from '@material-ui/core/styles';

import coverPhoto from '../../assests/taxi-cover.jpg';

export default makeStyles((theme) => ({
    cover: {
        backgroundImage: `url(${coverPhoto})`,
        backgroundSize: "cover",
        minHeight: 400,
        backgroundPosition: "center",

    },
    subhead: {
        backgroundColor: "#141414",
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    subheadtitle: {
        color: "#ffffff",
        textAlign: "center",
        verticalAlign: "center",
        fontWeight: 800,
    },
}));