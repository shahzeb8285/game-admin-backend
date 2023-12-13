-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('PENDING', 'REJECTED', 'SUCCESS');

-- CreateTable
CREATE TABLE "players" (
    "player_id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "tg_id" STRING NOT NULL,
    "tg_first_name" STRING NOT NULL,
    "tg_last_name" STRING NOT NULL,
    "tg_user_name" STRING NOT NULL,
    "tg_photo_url" STRING NOT NULL,
    "user_language" STRING NOT NULL,
    "registration_ip" STRING NOT NULL,
    "agent_id_r" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,
    "registration_date" STRING NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "admins" (
    "admin_id" STRING NOT NULL,
    "admin_name" STRING NOT NULL,
    "admin_password" STRING NOT NULL,
    "admin_role_id" STRING NOT NULL,
    "created_by" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "admin_roles" (
    "admin_role_id" STRING NOT NULL,
    "admin_role_name" STRING NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,

    CONSTRAINT "admin_roles_pkey" PRIMARY KEY ("admin_role_id")
);

-- CreateTable
CREATE TABLE "admin_accesses" (
    "admin_access_id" STRING NOT NULL,
    "access_name" STRING NOT NULL,

    CONSTRAINT "admin_accesses_pkey" PRIMARY KEY ("admin_access_id")
);

-- CreateTable
CREATE TABLE "admin_role_accesses" (
    "admin_role_id" STRING NOT NULL,
    "admin_access_id" STRING NOT NULL,

    CONSTRAINT "admin_role_accesses_pkey" PRIMARY KEY ("admin_role_id","admin_access_id")
);

-- CreateTable
CREATE TABLE "agents" (
    "agent_id" STRING NOT NULL,
    "agent_name" STRING NOT NULL,
    "agent_password" STRING NOT NULL,
    "created_by" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT true,
    "agent_id_m" STRING,

    CONSTRAINT "agents_pkey" PRIMARY KEY ("agent_id")
);

-- CreateTable
CREATE TABLE "agent_rebates" (
    "agent_rebate_id" STRING NOT NULL,
    "agent_id_r" STRING NOT NULL,
    "game_id" STRING NOT NULL,
    "rebate" FLOAT8 NOT NULL,
    "created_by" STRING NOT NULL,
    "from_date" TIMESTAMP(3) NOT NULL,
    "thru_date" TIMESTAMP(3) NOT NULL,
    "is_active" BOOL NOT NULL,

    CONSTRAINT "agent_rebates_pkey" PRIMARY KEY ("agent_rebate_id")
);

-- CreateTable
CREATE TABLE "player_login_logs" (
    "player_id_r" STRING NOT NULL,
    "ip" STRING NOT NULL,
    "login_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_login_logs_pkey" PRIMARY KEY ("player_id_r")
);

-- CreateTable
CREATE TABLE "admin_login_logs" (
    "login_id" STRING NOT NULL,
    "admin_id_r" STRING NOT NULL,
    "ip" STRING NOT NULL,
    "login_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_login_logs_pkey" PRIMARY KEY ("login_id")
);

-- CreateTable
CREATE TABLE "current_active_players" (
    "player_id_r" STRING NOT NULL,
    "last_active_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "current_active_players_pkey" PRIMARY KEY ("player_id_r")
);

-- CreateTable
CREATE TABLE "game_history" (
    "game_history_id" STRING NOT NULL,
    "game_id" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "i_gamedesc" STRING NOT NULL,
    "bet_amount" FLOAT8 NOT NULL,
    "win_amount" FLOAT8 NOT NULL,
    "transaction_date" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_history_pkey" PRIMARY KEY ("game_history_id")
);

-- CreateTable
CREATE TABLE "game_rebates" (
    "game_rebates_id" STRING NOT NULL,
    "game_history_id" STRING NOT NULL,
    "merchant_id" STRING NOT NULL,
    "game_id" STRING NOT NULL,
    "category" STRING NOT NULL,
    "effective_bet_amount" FLOAT8 NOT NULL,
    "rebate_amount" FLOAT8 NOT NULL,
    "status" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_rebates_pkey" PRIMARY KEY ("game_rebates_id")
);

-- CreateTable
CREATE TABLE "manual_adjustments" (
    "manual_adjustment_id" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "reason" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "created_by_r" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "manual_adjustments_pkey" PRIMARY KEY ("manual_adjustment_id")
);

-- CreateTable
CREATE TABLE "all_ow_requests" (
    "allow_request_id" STRING NOT NULL,
    "request" STRING NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "all_ow_requests_pkey" PRIMARY KEY ("allow_request_id")
);

-- CreateTable
CREATE TABLE "player_wallets" (
    "player_wallet_id" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "currency" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "frozen_amount" FLOAT8 NOT NULL,
    "cdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_wallets_pkey" PRIMARY KEY ("player_wallet_id")
);

-- CreateTable
CREATE TABLE "wallet_requests" (
    "wallet_request_id" STRING NOT NULL,
    "t_id" STRING NOT NULL,
    "type" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "currency" STRING NOT NULL,
    "amount" STRING NOT NULL,
    "i_game_id" STRING NOT NULL,
    "i_extparam" STRING NOT NULL,
    "i_rollback" STRING NOT NULL,
    "i_gamedesc" STRING NOT NULL,
    "i_action_id" STRING NOT NULL,
    "i_reference_action_id" STRING NOT NULL,
    "round_start" BOOL NOT NULL,
    "round_ended" BOOL NOT NULL,
    "game_extra" STRING NOT NULL,
    "subtype" STRING NOT NULL,
    "jackpot_win" INT4 NOT NULL,
    "hmac" STRING NOT NULL,
    "response" STRING NOT NULL,

    CONSTRAINT "wallet_requests_pkey" PRIMARY KEY ("wallet_request_id")
);

-- CreateTable
CREATE TABLE "admin_bank_accounts" (
    "admin_bank_account_id" STRING NOT NULL,
    "bank_name" STRING NOT NULL,
    "account_number" STRING NOT NULL,
    "holder_name" STRING NOT NULL,
    "enabled" BOOL NOT NULL DEFAULT false,
    "method" STRING NOT NULL,

    CONSTRAINT "admin_bank_accounts_pkey" PRIMARY KEY ("admin_bank_account_id")
);

-- CreateTable
CREATE TABLE "deposit_transactions" (
    "deposit_transaction_id" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "request_time" TIMESTAMP(3) NOT NULL,
    "process_time" TIMESTAMP(3) NOT NULL,
    "processed_by" STRING NOT NULL,
    "transaction_date" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "admin_bank_account_id_r" STRING NOT NULL,

    CONSTRAINT "deposit_transactions_pkey" PRIMARY KEY ("deposit_transaction_id")
);

-- CreateTable
CREATE TABLE "withdrawal_transactions" (
    "withdrawal_transaction_id" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "request_time" TIMESTAMP(3) NOT NULL,
    "process_time" TIMESTAMP(3) NOT NULL,
    "processed_by" STRING NOT NULL,
    "transaction_date" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "admin_bank_account_id_r" STRING NOT NULL,

    CONSTRAINT "withdrawal_transactions_pkey" PRIMARY KEY ("withdrawal_transaction_id")
);

-- CreateTable
CREATE TABLE "transfer_in_transactions" (
    "transfer_in_Transaction_id" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "request_time" TIMESTAMP(3) NOT NULL,
    "process_time" TIMESTAMP(3) NOT NULL,
    "processed_by" STRING NOT NULL,
    "transaction_date" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "counterpart_platform" STRING NOT NULL,
    "counterpart_username" STRING NOT NULL,

    CONSTRAINT "transfer_in_transactions_pkey" PRIMARY KEY ("transfer_in_Transaction_id")
);

-- CreateTable
CREATE TABLE "transfer_out_transactions" (
    "transfer_out_transaction_id" STRING NOT NULL,
    "player_id_r" STRING NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "currency" STRING NOT NULL,
    "request_time" TIMESTAMP(3) NOT NULL,
    "process_time" TIMESTAMP(3) NOT NULL,
    "processed_by" STRING NOT NULL,
    "transaction_date" STRING NOT NULL,
    "status" "TransactionType" NOT NULL DEFAULT 'PENDING',
    "counterpart_platform" STRING NOT NULL,
    "counterpart_username" STRING NOT NULL,

    CONSTRAINT "transfer_out_transactions_pkey" PRIMARY KEY ("transfer_out_transaction_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "players_tg_id_key" ON "players"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "players_tg_user_name_key" ON "players"("tg_user_name");

-- CreateIndex
CREATE UNIQUE INDEX "admins_admin_name_key" ON "admins"("admin_name");

-- CreateIndex
CREATE UNIQUE INDEX "admin_roles_admin_role_name_key" ON "admin_roles"("admin_role_name");

-- CreateIndex
CREATE UNIQUE INDEX "admin_accesses_access_name_key" ON "admin_accesses"("access_name");

-- CreateIndex
CREATE UNIQUE INDEX "agents_agent_name_key" ON "agents"("agent_name");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_agent_id_r_fkey" FOREIGN KEY ("agent_id_r") REFERENCES "agents"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_admin_role_id_fkey" FOREIGN KEY ("admin_role_id") REFERENCES "admin_roles"("admin_role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_role_accesses" ADD CONSTRAINT "admin_role_accesses_admin_role_id_fkey" FOREIGN KEY ("admin_role_id") REFERENCES "admin_roles"("admin_role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_role_accesses" ADD CONSTRAINT "admin_role_accesses_admin_access_id_fkey" FOREIGN KEY ("admin_access_id") REFERENCES "admin_accesses"("admin_access_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agents" ADD CONSTRAINT "agents_agent_id_m_fkey" FOREIGN KEY ("agent_id_m") REFERENCES "agents"("agent_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agent_rebates" ADD CONSTRAINT "agent_rebates_agent_id_r_fkey" FOREIGN KEY ("agent_id_r") REFERENCES "agents"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_login_logs" ADD CONSTRAINT "player_login_logs_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_login_logs" ADD CONSTRAINT "admin_login_logs_admin_id_r_fkey" FOREIGN KEY ("admin_id_r") REFERENCES "admins"("admin_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "current_active_players" ADD CONSTRAINT "current_active_players_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_history" ADD CONSTRAINT "game_history_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_rebates" ADD CONSTRAINT "game_rebates_game_history_id_fkey" FOREIGN KEY ("game_history_id") REFERENCES "game_history"("game_history_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manual_adjustments" ADD CONSTRAINT "manual_adjustments_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manual_adjustments" ADD CONSTRAINT "manual_adjustments_created_by_r_fkey" FOREIGN KEY ("created_by_r") REFERENCES "admins"("admin_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_wallets" ADD CONSTRAINT "player_wallets_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_requests" ADD CONSTRAINT "wallet_requests_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deposit_transactions" ADD CONSTRAINT "deposit_transactions_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deposit_transactions" ADD CONSTRAINT "deposit_transactions_admin_bank_account_id_r_fkey" FOREIGN KEY ("admin_bank_account_id_r") REFERENCES "admin_bank_accounts"("admin_bank_account_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawal_transactions" ADD CONSTRAINT "withdrawal_transactions_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawal_transactions" ADD CONSTRAINT "withdrawal_transactions_admin_bank_account_id_r_fkey" FOREIGN KEY ("admin_bank_account_id_r") REFERENCES "admin_bank_accounts"("admin_bank_account_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfer_in_transactions" ADD CONSTRAINT "transfer_in_transactions_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfer_out_transactions" ADD CONSTRAINT "transfer_out_transactions_player_id_r_fkey" FOREIGN KEY ("player_id_r") REFERENCES "players"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;
