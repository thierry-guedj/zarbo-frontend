import en from 'vuetify/es5/locale/en'

export default {
  $vuetify: en,
  hello: 'Hello World',
  pages: {
    home: 'Home',
    contacts: 'Contacts',
  },
  navbar: {
    artwork: 'Artwork',
    artists: 'Artists',
    upload: 'Upload',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
  },
  navigationDrawer: {
    welcome: 'Welcome',
    artwork: 'Artwork',
    artists: 'Artists',
    yourDesigns: 'Your artwork',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
  },
  menuAccount: {
    yourDesigns: 'Your artwork',
    yourProfile: 'Your profile',
  },
  index: {
    title: 'the beautiful arts site',
  },
  widgetTitle: {
    lastPublishedDesigns: 'Last published designs',
    moreFromUser: 'More from',
    moreFromTags: 'More similar',
  },
  designCard: {
    by: 'by',
    uploaded: 'Published date: ',
    tooltipLightbox: 'Open in fullscreen',
    tooltipFullscreen: 'Open the detailed page',
  },
  userCard: {
    registered: 'Registered',
  },
  search: {
    orderBy: 'Order by',
    hasComments: 'Has comments',
    search: 'Search',
    latestFirst: 'Latest first',
    latestFirstUsers: 'Latest first',
    mostLikedFirst: 'Most liked first',
    az: 'Alphabetical order A - Z',
    za: 'Alphabetical order Z - A',
  },
  show: {
    by: 'By',
    published: 'Publishing date: ',
    backToArtwork: 'Back to artwork',
    youLike: 'You like this artwork',
  },
  comments: {
    comments: 'Comments',
    comment: 'Comment',
    enterComment: 'Enter a comment',
    postComment: 'Post comment',
  },
  register: {
    register: 'Register',
    name: 'Name or Username',
    username: 'Username',
    email: 'E-mail',
    password: 'Password',
    confirmPassword: 'Confirm password',
    submit: 'Submit',
    emailSent: 'We have sent you an email to activate your account.',
    haveAccount: 'Already an account ?',
    login: 'Login',
    clear: 'Clear',
  },
  login: {
    login: 'Login',
    email: 'E-mail',
    password: 'Password',
    submit: 'Submit',
    forgotPassword: 'Forgot password ?',
    noAccount: "Don't have an account yet ? ",
    createAccount: 'Create an account',
    resendVerificationEmail: 'Resend verification email',
    clear: 'Clear',
  },
  resetEmail: {
    noAccount: "Don't have an account yet ? ",
    createAccount: 'Create an account',
    clear: 'Clear',
    resetEmail: 'Reset password email',
    resendVerificationEmail: 'Resend verification email',
    sendResetLink: 'Send password reset link',
    email: 'E-mail',
  },
  resendForm: {
    resendVerificationEmail: 'Resend verification email',
    clear: 'Clear',
    proceedToLogin: 'Proceed to Login',
    resentEmail: 'We have resent the verification Email.',
    noAccount: "Don't have an account yet ? ",
    createAccount: 'Create an account',
    submit: 'Submit',
    email: 'E-mail',
  },
  passwordResetForm: {
    resetPasswordEmail: 'Reset password',
    email: 'Email',
    newPassword: 'New password',
    newPasswordConfirm: 'New password confirmation',
    reset: 'Reset',
    clear: 'Clear',
    noAccount: "Don't have an account yet ? ",
    createAccount: 'Create an account',
    proceedToLogin: 'Proceed to Login',
  },
  verifyForm: {
    emailVerification: 'Email verification',
    proceedToLogin: 'Proceed to Login',
    resendVerificationEmail: 'Resend verification email',
  },
  settingsDesigns: {
    image: 'Image',
    title: 'Title',
    status: 'Status',
    edit: 'Edit',
    delete: 'Delete',
    rowsPerPage: 'Rows per page',
    of: 'of',
    search: 'search',
    published: 'Published',
    draft: 'Draft',
    artwork: 'Your artwork',
    description: 'Description',
    tags: 'Tags',
    confirmDelete: 'Please confirm',
    cancel: 'Cancel',
  },
  create: {
    uploadArtwork: 'Upload an artwok',
    selectImage: 'Select image',
    uploadNotice:
      'Tthe image size should be a maximum of 2MB. Please resize your file accordingly before you upload.',
    uploadError: 'An error occurred during the upload process',
    updateDesignInfo: 'Update Design Information',
    title: 'Title',
    description: 'Description',
    tagsLabel: 'Tags separated by commas',
    publishDesign: 'Publish this design',
    updateDesign: 'Update design',
    clear: 'Clear',
    assignToTeam: 'Assign to team',
    selectTeam: 'Select a team',
    updated: 'Design successfully uploaded',
    newItem: 'New Item',
    editItem: 'Edit Item',
    tagsNotice:
      'Please enter some tags about the technique of this artwork (pastel, watercolor etc) or about the subject (landscape, portrait etc).',
    tagsNotice2: 'Each tag must be validate by a coma after it.',
    saved: 'Saved successfully',
    stillUploading: 'Still uploading...Please wait',
    uploadSuccess: 'Design successfully uploaded',
  },
  user: {
    noResult: "This artist didn't published any artwork yet",
    backToUsersList: 'Back to users list',
    userPageTitle: 'Portfolio of ',
  },
  designs: {
    backToResults: 'Back to results',
    noResult: 'No result',
  },
  confirmDelete: {
    confirmMessage: 'Please confirm the deletion of this artwork.',
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  profile: {
    name: 'Name',
    tagline: 'Tagline',
    description: 'Description',
    clear: 'Clear',
    updateProfile: 'Update profile',
    someInfo: 'Please enter some information about yourself',
    profileUpdated: 'Profile updated successfully',
    profile: 'Profile',
    label: 'Drop your avatar here',
    updateAvatar: 'Update your avatar',
  },
  editDesign: {
    editItem: 'Edit Item',
    title: 'Title',
    description: 'Description',
    tagsLabel: 'Tags separated by commas',
    tagsNotice:
      'Please enter some tags about the technique of this artwork (pastel, watercolor etc) or about the subject (landscape, portrait etc).',
    tagsNotice2: 'Each tag must be validate by a coma after it.',
    cancel: 'Cancel',
    confirm: 'Confirm',
    publishDesign: 'Publish this artwork',
  },
  validation: {
    passwordMinLength: 'Password must be at least 8 characters long',
    passwordRequired: 'Password is required',
    emailRequired: 'E-mail is required',
    emailValid: 'Must be valid e-mail',
    passwordConfirmRequired: 'Password confirmation is required',
    passwordMatch: 'Password confirmation needs to match password',
  },
}
