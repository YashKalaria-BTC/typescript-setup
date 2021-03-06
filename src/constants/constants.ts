const constants = {
  loginPage: {
    title: 'Account Login',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    rememberMePlaceholder: 'Remember Me',
    buttons: {
      login: 'Login',
    },
  },
  dashboard: {
    companiesTitle: 'List of Companies',
    newEntityTitle: 'List of New Companies',
    suspendedEntityTitle: 'List of Suspended Companies',
    searchPlaceholder: 'Find by Name',
    tabTitles: ['Companies', 'New Companies', 'Suspended Companies'],
    cardLabels: ['Companies', 'URLs', 'Data Points', 'New Companies'],
    newEntityHeaders: [
      {
        label: 'No.',
        className: '',
        onHeaderClick: () => {},
        icons: [] as { className: string }[],
      },
      { label: 'Company' },
      { label: 'Action' },
    ],
    pageText: 'Company List',
    buttons: {
      update: 'Update',
    },
    dropdownOptions: [
      { value: 'All', key: 'all' },
      { value: 'Startup', key: 'startup' },
      { value: 'Investor', key: 'investor' },
      { value: 'Accelerator', key: 'accelerator' },
    ],
  },
  addNewUser: {
    title: 'Add User Details',
    firstNamePlaceholder: 'First Name',
    lastNamePlaceholder: 'Last Name',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    adminPlaceholder: 'Admin',
    confirmPasswordPlaceholder: 'Confirm Password',
    buttons: {
      addUser: 'Save Details',
    },
  },
  editUser: {
    title: 'Edit User Details',
    firstNamePlaceholder: 'First Name',
    lastNamePlaceholder: 'Last Name',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    adminPlaceholder: 'Admin',
    confirmPasswordPlaceholder: 'Confirm Password',
    buttons: {
      editUser: 'Save Details',
    },
  },
  profile: {
    title: 'Edit Profile',
    firstNamePlaceholder: 'First Name',
    lastNamePlaceholder: 'Last Name',
    emailPlaceholder: 'Email',
    adminPlaceholder: 'Admin',
    changePasswordPlaceholder: 'Change Password?',
    buttons: {
      update: 'Update',
    },
    changePasswordModal: {
      title: 'Change Password',
      oldPasswordPlaceholder: 'Old Password',
      newPasswordPlaceholder: 'New Password',
      confirmPasswordPlaceholder: 'Confirm Password',
      footerButtons: {
        cancel: 'Cancel',
        change: 'Change',
      },
    },
  },
  manageUsers: {
    title: 'List of Users',
    pageText: 'User List',
    searchText: 'Find by Name or Email',
    adminPlaceholder: 'Admin',
    userPlaceholder: 'User',
    headers: [
      { label: 'No.' },
      { label: 'First Name' },
      { label: 'Last Name' },
      { label: 'Email' },
      { label: 'Role' },
      { label: 'Edit' },
    ],
    buttons: {
      add: 'User',
    },
  },
  companyTable: {
    pageText: 'Company List',
    buttons: {
      update: 'Update',
    },
    headers: [
      { label: 'No.' },
      {
        label: 'Company',
        className: 'sorting',
        onHeaderClick: () => {},
        icons: [{ className: '' }],
      },
      { label: 'Sector' },
      { label: 'Funding Stage' },
      { label: 'UEN' },
      { label: 'Updated On' },
      { label: 'View' },
    ],
  },
  confirmationModal: {
    footerButtons: {
      cancel: 'Cancel',
      delete: 'Delete',
    },
  },
  pagination: {
    pagePlaceholder: 'Page',
    ofPlaceholder: 'of',
  },
  header: {
    profilePlaceholder: 'Manage Profile',
    logOutPlaceholder: 'Log Out',
  },
  sidebar: {
    dashboardPlaceholder: 'Dashboard',
    addUserPlaceholder: 'Add User',
    manageUsersPlaceholder: 'Manage Users',
  },
  tooltips: {
    exampleTooltip: 'Example Tooltip',
  },
};
export default constants;
