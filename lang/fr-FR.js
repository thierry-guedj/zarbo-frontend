import fr from 'vuetify/es5/locale/fr'

export default {
  $vuetify: fr,
  hello: 'Bonjour monde',
  pages: {
    home: 'Accueil',
    contacts: 'Contacts',
  },

  navbar: {
    artwork: 'Oeuvres',
    artists: 'Artistes',
    upload: 'Poster une oeuvre',
    signin: 'Se Connecter',
    signup: 'Devenir membre',
    signout: 'Deconnexion',
  },
  navigationDrawer: {
    welcome: 'Bienvenue',
    artwork: 'Oeuvres',
    artists: 'Artistes',
    yourDesigns: 'Vos oeuvres',
    signin: 'Se connecter',
    signup: 'Devenir membre',
    signout: 'Se déconnecter',
  },
  menuAccount: {
    yourDesigns: 'Vos oeuvres',
    yourProfile: 'Votre profil',
  },
  index: {
    title: 'le site des arts beaux.',
  },
  widgetTitle: {
    lastPublishedDesigns: 'Dernières oeuvres publiées',
    moreFromUser: 'Du même artiste',
    moreFromTags: 'Oeuvres similiaires',
  },
  designCard: {
    by: 'par',
    uploaded: 'Publiée le ',
    tooltipLightbox: 'Voir en plein écran',
    tooltipFullscreen: 'Ouvrir la page détaillée',
  },
  userCard: {
    registered: 'Enregistré le ',
  },
  search: {
    orderBy: 'Trier par',
    hasComments: 'Avec commentaires',
    search: 'Recherche',
    latestFirst: 'Les plus récentes',
    latestFirstUsers: 'Les derniers inscrits',
    mostLikedFirst: 'Les plus appréciées',
    az: 'Ordre Alphabetique order A - Z',
    za: 'Ordre Alphabetique Z - A',
  },
  show: {
    by: 'Par',
    published: 'Publiée le: ',
    backToArtwork: 'Retour aux oeuvres',
    youLike: 'Vous aimez cette oeuvre',
  },
  comments: {
    comments: 'Commentaires',
    comment: 'Commentaire',
    enterComment: 'Entrer un commentaire',
    postComment: 'Poster votre commentaire',
  },
  register: {
    register: 'Créer un compte',
    name: 'Nom ou Pseudo',
    username: "Nom d'utilisateur",
    email: 'E-mail',
    password: 'Mot de passe',
    confirmPassword: 'Confirmer le mot de passe',
    submit: 'Créer un compte',
    emailSent: 'Nous vous avons envoyé un e-mail pour activer votre compte.',
    haveAccount: 'Déjà membre ?',
    login: 'Se connecter',
    clear: 'Effacer',
  },
  login: {
    login: 'Se connecter',
    email: 'E-mail',
    password: 'Mot de passe',
    submit: 'Se connecter',
    forgotPassword: 'Mot de passe oublié ?',
    noAccount: 'Pas encore membre ? ',
    createAccount: 'Créer votre compte',
    resendVerificationEmail: "Renvoyer l'email de vérification",
    clear: 'Effacer',
  },
  resetEmail: {
    noAccount: 'Pas encore membre ? ',
    createAccount: 'Créer votre compte',
    clear: 'Effacer',
    resetEmail: 'Réinitialiser votre mot de passe',
    resendVerificationEmail: "Renvoyer l'e-mail de vérification",
    sendResetLink: 'Réinitialiser',
    email: 'E-mail',
  },
  resendForm: {
    resendVerificationEmail: 'Renvoyer le lien de vérification',
    clear: 'Effacer',
    proceedToLogin: 'Connectez-vous',
    resentEmail: 'E-mail de vérication renvoyé.',
    noAccount: 'Pas encore membre ? ',
    createAccount: 'Créer votre compte',
    submit: 'Renvoyer',
    email: 'E-mail',
  },
  passwordResetForm: {
    resetPasswordEmail: 'Réinitialisez votre mot de passe',
    email: 'Email',
    newPassword: 'Nouveau mot de passe',
    newPasswordConfirm: 'Confirmation du nouveau mot de passe',
    reset: 'Valider',
    clear: 'Effacer',
    noAccount: 'Pas encore membre ? ',
    createAccount: 'Créer votre compte',
    proceedToLogin: 'Connectez-vous',
  },
  verifyForm: {
    emailVerification: 'Vérification de votre e-mail',
    proceedToLogin: 'Connectez-vous',
    resendVerificationEmail: 'Renvoyer le lien de vérification',
  },
  settingsDesigns: {
    image: 'Image',
    title: 'Titre',
    status: 'Statut',
    edit: 'Modifier',
    delete: 'Supprimer',
    rowsPerPage: 'Lignes par page',
    of: 'sur',
    search: 'Recherche',
    published: 'Publiée',
    draft: 'Brouillon',
    artwork: 'Vos oeuvres',
    description: 'Description',
    tags: 'Mots-clés',
    confirmDelete: 'Veuillez confirmer la suppression',
    cancel: 'Annuler',
  },
  create: {
    uploadArtwork: 'Poster une oeuvre',
    selectImage: 'Selectionnez une image',
    uploadNotice: 'Le poids de votre image ne doit pas dépasser 10MB.',
    uploadError: 'Une erreur est survenue lors du téléchargement',
    updateDesignInfo: 'Modifier les informations de cette oeuvre',
    title: 'Titre',
    description: 'Description',
    tagsLabel: 'Mots-clés séparés par une virgule',
    publishDesign: 'Publier cette oeuvre',
    updateDesign: "Modifier l'oeuvre",
    clear: 'Effacer',
    upload: 'Poster',
    assignToTeam: 'Asociée à une équipe',
    selectTeam: 'Selectionner une équipe',
    updated: "L'oeuvre a été téléchargée avec succès",
    newItem: 'Nouvelle oeuvre',
    editItem: 'Editer une oeuvre',
    tagsNotice:
      'Vous pouvez entrer ci-dessous quelques mots-clés à propos de la technique de cette oeuvre (pastel, aquarelle etc) ou à propos du sujet (paysage, portrait etc).',
    tagsNotice2:
      "Chaque mot-clé doit être suivi d'une virgule pour être validé.",
    saved: 'Image téléchargée avec succès',
    stillUploading: 'Téléchargement toujours en cours...Patience...',
    uploadSuccess: 'Image téléchargée avec succès',
  },
  user: {
    noResult: "Cet artiste n'a pas encore publié d'oeuvre",
    backToUsersList: 'Retour à la liste des artistes',
    userPageTitle: 'Portfolio de ',
  },
  designs: {
    backToResults: 'Retour aux résultats',
    noResult: 'Pas de résultat',
  },
  confirmDelete: {
    confirmMessage: 'Veuillez confirmer la suppression de cette oeuvre.',
    cancel: 'Annuler',
    confirm: 'Confirmer',
  },
  profile: {
    name: 'Nom',
    tagline: 'Apophtegme',
    description: 'Description',
    clear: 'Effacer',
    updateProfile: 'Modifier votre profil',
    someInfo: 'Veuillez entrez quelques informations à propos de vous',
    profileUpdated: 'Profil modifié avec succès',
    profile: 'Votre profil',
    label: 'Sélectionnez votre avatar',
    updateAvatar: 'Modifiez votre avatar',
    saved: 'Avatar téléchargé avec succès',
    stillUploading: 'Téléchargement toujours en cours...Patience...',
    uploadSuccess: 'Avatar téléchargé avec succès',
  },
  editDesign: {
    editItem: 'Editer une oeuvre',
    title: 'Titre',
    description: 'Description',
    tagsLabel: 'Mots-clés séparés par une virgule',
    tagsNotice:
      'Vous pouvez entrer ci-dessous quelques mots-clés à propos de la technique de cette oeuvre (pastel, aquarelle etc) ou à propos du sujet (paysage, portrait etc).',
    tagsNotice2:
      "Chaque mot-clé doit être suivi d'une virgule pour être validé.",
    cancel: 'Annuler',
    confirm: 'Confirmer',
    publishDesign: 'Publier cette oeuvre',
  },
  validation: {
    passwordMinLength:
      'La longueur du mot de passe doit être au moins de 8 caractères',
    passwordRequired: 'Le mot de passe est requis',
    emailRequired: "L' e-mail est requis",
    emailValid: "L' e-mail doit être valide",
    passwordConfirmRequired: 'La confirmation du mot de passe est requise',
    passwordMatch: 'Les 2 mots de passe ne correspondent pas',
    titleMaxLength: 'Le titre ne doit pas dépasser 120  caractères',
    descriptionMaxLength: 'La description ne doit pas dépasser 3000 caractères',
  },
}
