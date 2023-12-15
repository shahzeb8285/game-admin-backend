const ACCESS = {
    //====ADMIN PERMISSIONS====
    //VIEW
    "VIEW_ADMIN_LIST": "getAdmins",
    "VIEW_ADMIN_ROLE": "getAdminsRoles",
    "VIEW_ADMIN_LOGIN_HISTORY": "getAdminsLoginHistory",
    "VIEW_ACCESSES": "getAccesses",

    //ACTIONS
    "CREATE_NEW_ADMIN": "createAdmin",
    "EDIT_ADMIN": "updateAdmin",
    "CREATE_ADMIN_ROLE": "createAdminRole",
    "UPDATE_ADMIN_ROLE": "updateAdminRole",
    
    

    //====AGENT PERMISSIONS====
    //VIEW
    "VIEW_AGENT_LIST": "getAgents",
    "VIEW_INCOME_STATEMENT": "getIncomeStatement", // not done
    //ACTIONS
    "CREATE_AGENT": "createAgent",
    "EDIT_AGENT": "updateAgent",


    //====USER PERMISSIONS====
    //VIEW
    "VIEW_USER_LIST": "getUsers",
    "VIEW_USER_BONUS_HISTORY": "getUsersBonusHistory",
    "VIEW_MANUAL_ADJUSTMENT": "getManualAdjustments",
    "VIEW_USER_LOGIN_HISTORY": "getUserLoginHistory",
    "VIEW_USER_GAME_HISTORY": "getUsersGameHistory", // not done

    //ACTIONS
    "CREATE_MANUAL_ADJUSTMENT": "createManualAdjustment",
    "EDIT_USER": "updateUser",


 
 
    //====FINANCE PERMISSIONS====
    //VIEW
    "VIEW_DEPOSIT_LIST": "getDeposits",
    "VIEW_WITHDRAWAL_LIST": "getWithdrawals",

    //ACTIONS
    "EDIT_WITHDRAWAL": "updateWithdrawal",
    "EDIT_DEPOSIT": "updateDeposit",




    //====SETTING PERMISSIONS====
    //VIEW
    "VIEW_BANK_ACCOUNT_LIST": "getBankAccounts",
    "VIEW_GAME_REBATE_LIST": "getGameRebates",
    
    //ACTIONS
    "CREATE_BANK_ACCOUNT": "createBankAccount",
    "EDIT_BANK_ACCOUNT": "updateBankAccount",


}

export default ACCESS;
