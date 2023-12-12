-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('PENDING', 'REJECTED', 'subtype');

-- CreateTable
CREATE TABLE "players" (
    "playerID" STRING NOT NULL,
    "name" STRING NOT NULL,
    "tgID" STRING NOT NULL,
    "tgFirstName" STRING NOT NULL,
    "tgLastName" STRING NOT NULL,
    "tgUsername" STRING NOT NULL,
    "tgPhotoUrl" STRING NOT NULL,
    "userLanguage" STRING NOT NULL,
    "registrationIp" STRING NOT NULL,
    "agentID" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,
    "registrationDate" STRING NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("playerID")
);

-- CreateTable
CREATE TABLE "admins" (
    "adminID" STRING NOT NULL,
    "adminName" STRING NOT NULL,
    "adminPassword" STRING NOT NULL,
    "adminRoleID" STRING NOT NULL,
    "createdBy" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("adminID")
);

-- CreateTable
CREATE TABLE "admin_roles" (
    "adminRoleID" STRING NOT NULL,
    "adminRoleName" STRING NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,

    CONSTRAINT "admin_roles_pkey" PRIMARY KEY ("adminRoleID")
);

-- CreateTable
CREATE TABLE "admin_accesses" (
    "adminAccessID" STRING NOT NULL,
    "accessName" STRING NOT NULL,

    CONSTRAINT "admin_accesses_pkey" PRIMARY KEY ("adminAccessID")
);

-- CreateTable
CREATE TABLE "admin_role_accesses" (
    "admin_roleID" STRING NOT NULL,
    "admin_access_id" STRING NOT NULL,

    CONSTRAINT "admin_role_accesses_pkey" PRIMARY KEY ("admin_roleID","admin_access_id")
);

-- CreateTable
CREATE TABLE "agents" (
    "agentID" STRING NOT NULL,
    "agentName" STRING NOT NULL,
    "agentPassword" STRING NOT NULL,
    "createdBy" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,
    "agentId" STRING,

    CONSTRAINT "agents_pkey" PRIMARY KEY ("agentID")
);

-- CreateTable
CREATE TABLE "agent_rebates" (
    "agentRebateID" STRING NOT NULL,
    "agentID" STRING NOT NULL,
    "gameID" STRING NOT NULL,
    "rebate" FLOAT8 NOT NULL,
    "createdBy" STRING NOT NULL,
    "fromDate" TIMESTAMP(3) NOT NULL,
    "thruDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOL NOT NULL,

    CONSTRAINT "agent_rebates_pkey" PRIMARY KEY ("agentRebateID")
);

-- CreateTable
CREATE TABLE "player_login_logs" (
    "playerID" STRING NOT NULL,
    "ip" STRING NOT NULL,
    "loginTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_login_logs_pkey" PRIMARY KEY ("playerID")
);

-- CreateTable
CREATE TABLE "admin_login_logs" (
    "loginID" STRING NOT NULL,
    "adminID" STRING NOT NULL,
    "ip" STRING NOT NULL,
    "loginTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_login_logs_pkey" PRIMARY KEY ("loginID")
);

-- CreateTable
CREATE TABLE "current_active_players" (
    "playerID" STRING NOT NULL,
    "lastActiveTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "current_active_players_pkey" PRIMARY KEY ("playerID")
);

-- CreateTable
CREATE TABLE "game_history" (
    "gameHistoryID" STRING NOT NULL,
    "gameID" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "iGamedesc" STRING NOT NULL,
    "betAmount" FLOAT8 NOT NULL,
    "winAmount" FLOAT8 NOT NULL,
    "transactionDate" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_history_pkey" PRIMARY KEY ("gameHistoryID")
);

-- CreateTable
CREATE TABLE "game_rebates" (
    "game_rebatesID" STRING NOT NULL,
    "gameHistoryID" STRING NOT NULL,
    "merchantID" STRING NOT NULL,
    "gameID" STRING NOT NULL,
    "category" STRING NOT NULL,
    "effectiveBetAmount" FLOAT8 NOT NULL,
    "rebateAmount" FLOAT8 NOT NULL,
    "status" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_rebates_pkey" PRIMARY KEY ("game_rebatesID")
);

-- CreateTable
CREATE TABLE "manual_adjustments" (
    "manualAdjustmentID" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "reason" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "createdBy" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "manual_adjustments_pkey" PRIMARY KEY ("manualAdjustmentID")
);

-- CreateTable
CREATE TABLE "all_ow_requests" (
    "allOwRequestID" STRING NOT NULL,
    "request" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "all_ow_requests_pkey" PRIMARY KEY ("allOwRequestID")
);

-- CreateTable
CREATE TABLE "player_wallets" (
    "playerWalletID" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "currency" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "frozenAmount" FLOAT8 NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_wallets_pkey" PRIMARY KEY ("playerWalletID")
);

-- CreateTable
CREATE TABLE "wallet_requests" (
    "walletRequestID" STRING NOT NULL,
    "tID" STRING NOT NULL,
    "type" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "currency" STRING NOT NULL,
    "amount" STRING NOT NULL,
    "iGameID" STRING NOT NULL,
    "iExtparam" STRING NOT NULL,
    "iRollback" STRING NOT NULL,
    "iGamedesc" STRING NOT NULL,
    "iActionID" STRING NOT NULL,
    "iReferenceActionID" STRING NOT NULL,
    "roundStart" BOOL NOT NULL,
    "roundEnded" BOOL NOT NULL,
    "gameExtra" STRING NOT NULL,
    "subtype" STRING NOT NULL,
    "jackpotWin" INT4 NOT NULL,
    "hmac" STRING NOT NULL,
    "response" STRING NOT NULL,

    CONSTRAINT "wallet_requests_pkey" PRIMARY KEY ("walletRequestID")
);

-- CreateTable
CREATE TABLE "admin_bank_accounts" (
    "adminBankAccountID" STRING NOT NULL,
    "bankName" STRING NOT NULL,
    "accountNumber" STRING NOT NULL,
    "holderName" STRING NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT false,
    "method" STRING NOT NULL,

    CONSTRAINT "admin_bank_accounts_pkey" PRIMARY KEY ("adminBankAccountID")
);

-- CreateTable
CREATE TABLE "deposit_transactions" (
    "depositTransactionID" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "requestTime" TIMESTAMP(3) NOT NULL,
    "processTime" TIMESTAMP(3) NOT NULL,
    "processedBy" STRING NOT NULL,
    "transactionDate" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "adminBankAccountID" STRING NOT NULL,

    CONSTRAINT "deposit_transactions_pkey" PRIMARY KEY ("depositTransactionID")
);

-- CreateTable
CREATE TABLE "withdrawal_transactions" (
    "withdrawalTransactionID" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "requestTime" TIMESTAMP(3) NOT NULL,
    "processTime" TIMESTAMP(3) NOT NULL,
    "processedBy" STRING NOT NULL,
    "transactionDate" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "adminBankAccountID" STRING NOT NULL,

    CONSTRAINT "withdrawal_transactions_pkey" PRIMARY KEY ("withdrawalTransactionID")
);

-- CreateTable
CREATE TABLE "transfer_in_transactions" (
    "transferInTransactionID" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "requestTime" TIMESTAMP(3) NOT NULL,
    "processTime" TIMESTAMP(3) NOT NULL,
    "processedBy" STRING NOT NULL,
    "transactionDate" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "counterpartPlatform" STRING NOT NULL,
    "counterpartUsername" STRING NOT NULL,

    CONSTRAINT "transfer_in_transactions_pkey" PRIMARY KEY ("transferInTransactionID")
);

-- CreateTable
CREATE TABLE "transfer_out_transactions" (
    "transferOutTransactionID" STRING NOT NULL,
    "playerID" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "requestTime" TIMESTAMP(3) NOT NULL,
    "processTime" TIMESTAMP(3) NOT NULL,
    "processedBy" STRING NOT NULL,
    "transactionDate" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "counterpartPlatform" STRING NOT NULL,
    "counterpartUsername" STRING NOT NULL,

    CONSTRAINT "transfer_out_transactions_pkey" PRIMARY KEY ("transferOutTransactionID")
);

-- CreateIndex
CREATE UNIQUE INDEX "players_tgID_key" ON "players"("tgID");

-- CreateIndex
CREATE UNIQUE INDEX "players_tgUsername_key" ON "players"("tgUsername");

-- CreateIndex
CREATE UNIQUE INDEX "admins_adminName_key" ON "admins"("adminName");

-- CreateIndex
CREATE UNIQUE INDEX "admin_roles_adminRoleName_key" ON "admin_roles"("adminRoleName");

-- CreateIndex
CREATE UNIQUE INDEX "admin_accesses_accessName_key" ON "admin_accesses"("accessName");

-- CreateIndex
CREATE UNIQUE INDEX "agents_agentName_key" ON "agents"("agentName");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_agentID_fkey" FOREIGN KEY ("agentID") REFERENCES "agents"("agentID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_adminRoleID_fkey" FOREIGN KEY ("adminRoleID") REFERENCES "admin_roles"("adminRoleID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_role_accesses" ADD CONSTRAINT "admin_role_accesses_admin_roleID_fkey" FOREIGN KEY ("admin_roleID") REFERENCES "admin_roles"("adminRoleID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_role_accesses" ADD CONSTRAINT "admin_role_accesses_admin_access_id_fkey" FOREIGN KEY ("admin_access_id") REFERENCES "admin_accesses"("adminAccessID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agents" ADD CONSTRAINT "agents_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "agents"("agentID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agent_rebates" ADD CONSTRAINT "agent_rebates_agentID_fkey" FOREIGN KEY ("agentID") REFERENCES "agents"("agentID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_login_logs" ADD CONSTRAINT "player_login_logs_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_login_logs" ADD CONSTRAINT "admin_login_logs_adminID_fkey" FOREIGN KEY ("adminID") REFERENCES "admins"("adminID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "current_active_players" ADD CONSTRAINT "current_active_players_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_history" ADD CONSTRAINT "game_history_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_rebates" ADD CONSTRAINT "game_rebates_gameHistoryID_fkey" FOREIGN KEY ("gameHistoryID") REFERENCES "game_history"("gameHistoryID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manual_adjustments" ADD CONSTRAINT "manual_adjustments_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manual_adjustments" ADD CONSTRAINT "manual_adjustments_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "admins"("adminID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_wallets" ADD CONSTRAINT "player_wallets_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_requests" ADD CONSTRAINT "wallet_requests_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deposit_transactions" ADD CONSTRAINT "deposit_transactions_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deposit_transactions" ADD CONSTRAINT "deposit_transactions_adminBankAccountID_fkey" FOREIGN KEY ("adminBankAccountID") REFERENCES "admin_bank_accounts"("adminBankAccountID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawal_transactions" ADD CONSTRAINT "withdrawal_transactions_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawal_transactions" ADD CONSTRAINT "withdrawal_transactions_adminBankAccountID_fkey" FOREIGN KEY ("adminBankAccountID") REFERENCES "admin_bank_accounts"("adminBankAccountID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfer_in_transactions" ADD CONSTRAINT "transfer_in_transactions_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfer_out_transactions" ADD CONSTRAINT "transfer_out_transactions_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "players"("playerID") ON DELETE RESTRICT ON UPDATE CASCADE;
