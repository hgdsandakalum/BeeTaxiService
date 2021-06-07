import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        margin: 10,
        height: 350,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        backgroundColor: '#171717',
        justifyContent: 'flex-end',
        marginTop: '-10px',
        color: '#ffffff',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    price: {
        color: '#000000',
        fontWeight: 800,
    },
    seller: {
        fontWeight: 500,
    }
}));