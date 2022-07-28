import "./App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import MuiDateRangePicker from "./components/lab-components/MuiDateRangePicker";
import MuiDateTimePicker from "./components/lab-components/MuiDateTimePicker";
import MuiMasonry from "./components/lab-components/MuiMasonry";
import MuiTabs from "./components/lab-components/MuiTabs";

// import MuiLoadingButton from './components/lab-components/MuiLoadingButton';

// import MuiAlert from "./components/feedback-components/MuiAlert";
// import MuiDialog from "./components/feedback-components/MuiDialog";
// import MuiProgress from "./components/feedback-components/MuiProgress";
// import MuiSkeleton from "./components/feedback-components/MuiSkeleton";
// import MuiSnackbar from "./components/feedback-components/MuiSnackbar";

// import MuiAvatar from "./components/data-display-components/MuiAvatar";
// import MuiBadge from "./components/data-display-components/MuiBadge";
// import MuiChip from "./components/data-display-components/MuiChip";
// import MuiList from "./components/data-display-components/MuiList";
// import MuiTable from "./components/data-display-components/MuiTable";
// import MuiTooltip from "./components/data-display-components/MuiTooltip";

// import MuiBottomNavigation from "./components/navigation-components/MuiBottomNavigation";

// import MuiSpeedDial from './components/MuiSpeedDial';

// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiDrawer from './components/MuiDrawer';
// import MuiLink from './components/MuiLink';
// import MuiNavbar from './components/MuiNavbar';

// import MuiImageList from './components/MuiImageList';

// import MuiAccordion from './components/MuiAccordion';

// import MuiCard from "./components/MuiCard";

// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiLayout from './components/MuiLayout';

// import MuiRating from './components/MuiRating';

// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';

// import MuiRadioButton from './components/MuiRadioButton';

// import MuiSelect from './components/MuiSelect';

// import MuiButton from './components/MuiButton';
// import MuiTextField from './components/MuiTextField';

// import MuiTypography from './components/MuiTypography';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MuiBottomNavigation />
        <MuiSpeedDial />
        <MuiNavbar />
        <MuiBreadcrumbs />
        <MuiDrawer />
        <MuiLink />
        <MuiImageList />
        <MuiAccordion />
        <MuiCard />
        <MuiLayout />
        <MuiAutocomplete />
        <MuiRating />
        <MuiSwitch />
        <MuiCheckbox />
        <MuiRadioButton />
        <MuiSelect />
        <MuiTextField />
        <MuiButton />
        <MuiTypography /> */}
        {/* Data Display Components */}
        {/* <MuiAvatar />
        <MuiBadge />
        <MuiList />
        <MuiChip />
        <MuiTooltip />
        <MuiTable /> */}
        {/* Feedback components */}
        {/* <MuiSkeleton />
        <MuiProgress />
        <MuiDialog />
        <MuiSnackbar />
        <MuiAlert /> */}
        {/* Lab Components */}
        {/* <MuiLoadingButton /> */}
        <MuiMasonry />
        {/*<MuiTabs />
         <MuiDateRangePicker />
        <MuiDateTimePicker /> */}
      </div>
    </LocalizationProvider>
  );
}

export default App;
