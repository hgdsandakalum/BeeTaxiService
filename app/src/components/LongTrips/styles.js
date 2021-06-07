import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
    },
    root: {
        flexGrow: 1,
    },
    item: {
        marginLeft: 10,
        marginRight: 10,
    }

}));