CREATE TYPE "rebate_status" AS ENUM (
  'NOT_CALCULATED',
  'DISTRIBUTED',
  'COLLECTED'
);

CREATE TYPE "bank_method" AS ENUM (
  'FPS',
  'BANK'
);

CREATE TYPE "wallet_transaction_status" AS ENUM (
  'PENDING',
  'SUCCESS',
  'FAILED'
);

CREATE TYPE "real_currency" AS ENUM (
  'HKD',
  'USDT'
);

CREATE TYPE "game_currency" AS ENUM (
  'fHKD'
);

CREATE TABLE "player_login_logs" (
  "player_login_log_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "ip" VARCHAR(255) NOT NULL,
  "login_time" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "admin_login_logs" (
  "admin_login_log_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "admin_id" UUID NOT NULL,
  "ip" VARCHAR(255) NOT NULL,
  "login_time" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "manual_adjustments" (
  "manual_adjustment_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "reason" VARCHAR(255),
  "amount" "DECIMAL(10, 2)" NOT NULL,
  "created_by" UUID NOT NULL,
  "cdate" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "players" (
  "player_id" VARCHAR(50) PRIMARY KEY,
  "name" VARCHAR(255),
  "tg_id" VARCHAR(255),
  "tg_first_name" VARCHAR(255),
  "tg_last_name" VARCHAR(255),
  "tg_username" VARCHAR(255),
  "tg_photo_url" VARCHAR(255),
  "user_language" VARCHAR(255),
  "registration_ip" VARCHAR(255),
  "agent_id" UUID,
  "registration_date" VARCHAR(8),
  "password" VARCHAR(255),
  "fundist_password" VARCHAR(255),
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ,
  "enabled" BOOLEAN
);

CREATE TABLE "agents" (
  "agent_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "agent_name" VARCHAR(255),
  "agent_password" VARCHAR(255),
  "parent_agent_id" UUID,
  "created_by" VARCHAR(255) NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ,
  "enabled" BOOLEAN
);

CREATE TABLE "admins" (
  "admin_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "admin_name" VARCHAR(255),
  "admin_password" VARCHAR(255),
  "admin_role_id" UUID,
  "created_by" UUID NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ,
  "enabled" BOOLEAN
);

CREATE TABLE "admin_roles" (
  "admin_role_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "admin_role_name" VARCHAR(255),
  "created_by" UUID NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ,
  "enabled" BOOLEAN
);

CREATE TABLE "admin_accesses" (
  "admin_access_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "access_name" VARCHAR(255)
);

CREATE TABLE "admin_role_accesses" (
  "admin_role_access_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "admin_role_id" UUID,
  "admin_access_id" UUID,
  "created_by" UUID NOT NULL,
  "updated_by" UUID NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ,
  "enabled" BOOLEAN
);

CREATE TABLE "exchange_rates" (
  "exchange_rate_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "real_currency" real_currency NOT NULL,
  "game_currency" game_currency NOT NULL,
  "game_per_real" "DECIMAL(19, 4)" NOT NULL,
  "enabled" BOOLEAN NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "agent_rebate_rates" (
  "agent_rebate_rate_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "agent_id" UUID NOT NULL,
  "rebate_category_id" INT NOT NULL,
  "rebate" "DECIMAL(10, 6)" NOT NULL,
  "created_by" VARCHAR(255) NOT NULL,
  "cdate" TIMESTAMPTZ NOT NULL,
  "is_active" BOOLEAN NOT NULL
);

CREATE TABLE "player_rebate_rates" (
  "player_rebate_rate_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "rebate_category_id" INT NOT NULL,
  "rebate" "DECIMAL(10, 6)" NOT NULL,
  "created_by" VARCHAR(255) NOT NULL,
  "cdate" TIMESTAMPTZ NOT NULL,
  "is_active" BOOLEAN NOT NULL
);

CREATE TABLE "agent_shares" (
  "agent_share_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "agent_id" UUID,
  "shares" "DECIMAL(10, 6)" NOT NULL,
  "created_by" VARCHAR(255) NOT NULL,
  "cdate" TIMESTAMPTZ NOT NULL,
  "is_active" BOOLEAN NOT NULL
);

CREATE TABLE "game_records_by_period" (
  "game_records_by_period_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "game_date" DATE NOT NULL,
  "game_url" VARCHAR(255),
  "player_id" VARCHAR(50),
  "rebate_category_id" INT,
  "effective_bet_amount" "DECIMAL(10, 2)",
  "pnl" "DECIMAL(10, 2)",
  "rebate_amount" "DECIMAL(10, 2)",
  "rebate_status" rebate_status NOT NULL DEFAULT 'NOT_CALCULATED'
);

CREATE TABLE "game_records_by_day" (
  "game_records_by_day_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "game_date" DATE NOT NULL,
  "player_id" VARCHAR(50) NOT NULL,
  "rebate_category_id" INT NOT NULL,
  "effective_bet_amount" "DECIMAL(10, 2)" NOT NULL,
  "pnl" "DECIMAL(10, 2)" NOT NULL,
  "rebate_amount" "DECIMAL(10, 2)" NOT NULL,
  "cdate" TIMESTAMPTZ NOT NULL,
  "udate" TIMESTAMPTZ NOT NULL,
  "is_active" BOOLEAN NOT NULL
);

CREATE TABLE "agent_records_by_day" (
  "agent_records_by_day_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "game_records_by_day_id" UUID,
  "game_date" DATE NOT NULL,
  "player_id" VARCHAR(50) NOT NULL,
  "rebate_category_id" INT NOT NULL,
  "agent_id" UUID NOT NULL,
  "child_agent_id" UUID,
  "effective_bet_amount" "DECIMAL(10, 2)" NOT NULL,
  "rebate_income" "DECIMAL(10, 2)" NOT NULL,
  "rebate_expense" "DECIMAL(10, 2)" NOT NULL,
  "game_pnl_income" "DECIMAL(10, 2)" NOT NULL,
  "game_pnl_expense" "DECIMAL(10, 2)" NOT NULL,
  "cdate" TIMESTAMPTZ NOT NULL,
  "udate" TIMESTAMPTZ NOT NULL,
  "is_active" BOOLEAN NOT NULL
);

CREATE TABLE "admin_bank_accounts" (
  "admin_bank_account_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "bank_name" VARCHAR(255) NOT NULL,
  "account_number" VARCHAR(255) NOT NULL,
  "holder_name" VARCHAR(255) NOT NULL,
  "method" bank_method NOT NULL,
  "enabled" BOOLEAN NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "player_bank_accounts" (
  "player_bank_account_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "bank_name" VARCHAR(255) NOT NULL,
  "account_number" VARCHAR(255) NOT NULL,
  "holder_name" VARCHAR(255) NOT NULL,
  "method" bank_method NOT NULL,
  "enabled" BOOLEAN NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "player_wallets" (
  "player_wallet_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50),
  "currency" game_currency,
  "amount" "DECIMAL(19, 4)",
  "frozen_amount" "DECIMAL(19, 4)",
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "deposit_transactions" (
  "deposit_transaction_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "transaction_currency" real_currency NOT NULL,
  "transaction_amount" "DECIMAL(19, 4)" NOT NULL,
  "game_currency" game_currency NOT NULL,
  "game_amount" "DECIMAL(19, 4)" NOT NULL,
  "admin_bank_account_id" UUID,
  "transaction_date" VARCHAR(8),
  "player_remarks" VARCHAR(1000),
  "comment" VARCHAR(255),
  "processed_by" VARCHAR(255),
  "process_time" TIMESTAMPTZ,
  "status" wallet_transaction_status NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "withdrawal_transactions" (
  "withdrawal_transaction_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "transaction_currency" real_currency NOT NULL,
  "transaction_amount" "DECIMAL(19, 4)" NOT NULL,
  "game_currency" game_currency NOT NULL,
  "game_amount" "DECIMAL(19, 4)" NOT NULL,
  "player_bank_account_id" UUID,
  "transaction_date" VARCHAR(8),
  "player_remarks" VARCHAR(1000),
  "comment" VARCHAR(255),
  "processed_by" VARCHAR(255),
  "process_time" TIMESTAMPTZ,
  "status" wallet_transaction_status NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "transfer_in_transactions" (
  "transfer_in_transaction_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "transaction_currency" real_currency NOT NULL,
  "transaction_amount" "DECIMAL(19, 4)" NOT NULL,
  "game_currency" game_currency NOT NULL,
  "game_amount" "DECIMAL(19, 4)" NOT NULL,
  "counterpart_platform" VARCHAR(255),
  "counterpart_username" VARCHAR(255),
  "transaction_date" VARCHAR(8),
  "player_remarks" VARCHAR(1000),
  "comment" VARCHAR(255),
  "processed_by" VARCHAR(255),
  "process_time" TIMESTAMPTZ,
  "status" wallet_transaction_status NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "transfer_out_transactions" (
  "transfer_out_transaction_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "player_id" VARCHAR(50) NOT NULL,
  "transaction_currency" real_currency NOT NULL,
  "transaction_amount" "DECIMAL(19, 4)" NOT NULL,
  "game_currency" game_currency NOT NULL,
  "game_amount" "DECIMAL(19, 4)" NOT NULL,
  "counterpart_platform" VARCHAR(255),
  "counterpart_username" VARCHAR(255),
  "transaction_date" VARCHAR(8),
  "player_remarks" VARCHAR(1000),
  "comment" VARCHAR(255),
  "processed_by" VARCHAR(255),
  "process_time" TIMESTAMPTZ,
  "status" wallet_transaction_status NOT NULL,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "all_ow_requests" (
  "all_ow_request_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "request" VARCHAR(100000),
  "cdate" TIMESTAMPTZ
);

CREATE TABLE "wallet_requests" (
  "wallet_request_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "tid" VARCHAR(255) NOT NULL,
  "type" VARCHAR(255),
  "player_id" VARCHAR(50),
  "currency" VARCHAR(255),
  "amount" VARCHAR(255),
  "i_game_id" VARCHAR(255) NOT NULL,
  "i_extparam" VARCHAR(255),
  "i_rollback" VARCHAR(255),
  "i_gamedesc" VARCHAR(255),
  "i_action_id" VARCHAR(255),
  "i_reference_action_id" VARCHAR(255),
  "round_start" BOOLEAN,
  "round_ended" BOOLEAN,
  "game_extra" VARCHAR(255),
  "subtype" VARCHAR(255),
  "jackpot_win" INT,
  "hmac" VARCHAR(255),
  "response" VARCHAR(100000),
  "cdate" TIMESTAMPTZ
);

CREATE TABLE "game_actions" (
  "game_action_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "actid" VARCHAR(255),
  "type" VARCHAR(255),
  "amount" VARCHAR(255),
  "timestamp" VARCHAR(255),
  "game_round_info_id" UUID
);

CREATE TABLE "game_round_infos" (
  "game_round_info_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "game_id" VARCHAR(255),
  "player_id" VARCHAR(50),
  "i_gamedesc" VARCHAR(255),
  "i_extparam" VARCHAR(255),
  "game_extra" VARCHAR(255),
  "cdate" TIMESTAMPTZ
);

CREATE TABLE "unprocessed_game_round_infos" (
  "game_round_info_id" UUID PRIMARY KEY NOT NULL
);

CREATE TABLE "game_record_rounds" (
  "game_round_info_id" UUID PRIMARY KEY NOT NULL,
  "game_date" DATE,
  "game_url" VARCHAR(255),
  "player_id" VARCHAR(50),
  "rebate_category_id" INT,
  "bet_amount" "DECIMAL(10, 2)",
  "payout" "DECIMAL(10, 2)",
  "effective_bet_amount" "DECIMAL(10, 2)",
  "is_processed" BOOLEAN,
  "game_records_by_period_id" UUID
);

CREATE TABLE "sg_games" (
  "sg_game_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "game_id" INT,
  "url" VARCHAR(255),
  "game_name" VARCHAR(255),
  "image" VARCHAR(255),
  "category_id" VARCHAR(255),
  "merchant_id" INT,
  "sort" INT,
  "page_code" VARCHAR(255),
  "mobile_page_code" VARCHAR(255),
  "rtp" "DECIMAL(10, 4)",
  "coun_rest_id" INT,
  "external_code" VARCHAR(255),
  "mobile_external_code" VARCHAR(255),
  "table_id" VARCHAR(255),
  "has_demo" BOOLEAN,
  "freeround" BOOLEAN,
  "bonus_buy" BOOLEAN,
  "megaways" BOOLEAN,
  "freespins" BOOLEAN,
  "min_bet_default" "DECIMAL(10, 4)",
  "max_bet_default" "DECIMAL(10, 4)",
  "max_multiplier" "DECIMAL(10, 4)",
  "enabled" BOOLEAN,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "sg_categories" (
  "sg_category_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "category_id" INT,
  "category_name" VARCHAR(10000),
  "csort" INT,
  "enabled" BOOLEAN,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "fl_categories" (
  "fl_categories_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "category_id" INT,
  "category_name" VARCHAR(10000),
  "csort" INT,
  "rebate_priority" INT,
  "enabled" BOOLEAN,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "categories_mappings" (
  "categories_mapping_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "sg_category_id" INT,
  "fl_category_id" INT,
  "enabled" BOOLEAN,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "sg_merchants" (
  "sg_merchant_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "merchant_id" INT,
  "merchant_name" VARCHAR(255),
  "merchant_alias" VARCHAR(255),
  "image" VARCHAR(255),
  "enabled" BOOLEAN,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "sg_countries_restrictions" (
  "sg_coun_rest_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "coun_rest_id" INT,
  "coun_rest_name" VARCHAR(255),
  "merchant_id" INT,
  "countries" VARCHAR(10000),
  "enabled" BOOLEAN,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

CREATE TABLE "sg_merchants_currencies" (
  "sg_merchants_currency_id" UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  "merchants_currency_id" INT,
  "merchant_id" INT,
  "currencies" VARCHAR(10000),
  "enabled" BOOLEAN,
  "cdate" TIMESTAMPTZ,
  "udate" TIMESTAMPTZ
);

ALTER TABLE "player_login_logs" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "admin_login_logs" ADD FOREIGN KEY ("admin_id") REFERENCES "admins" ("admin_id");

ALTER TABLE "manual_adjustments" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "manual_adjustments" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("admin_id");

ALTER TABLE "players" ADD FOREIGN KEY ("agent_id") REFERENCES "agents" ("agent_id");

ALTER TABLE "agents" ADD FOREIGN KEY ("parent_agent_id") REFERENCES "agents" ("agent_id");

ALTER TABLE "admins" ADD FOREIGN KEY ("admin_role_id") REFERENCES "admin_roles" ("admin_role_id");

ALTER TABLE "admins" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("admin_id");

ALTER TABLE "admin_roles" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("admin_id");

ALTER TABLE "admin_role_accesses" ADD FOREIGN KEY ("admin_role_id") REFERENCES "admin_roles" ("admin_role_id");

ALTER TABLE "admin_role_accesses" ADD FOREIGN KEY ("admin_access_id") REFERENCES "admin_accesses" ("admin_access_id");

ALTER TABLE "admin_role_accesses" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("admin_id");

ALTER TABLE "admin_role_accesses" ADD FOREIGN KEY ("updated_by") REFERENCES "admins" ("admin_id");

ALTER TABLE "agent_rebate_rates" ADD FOREIGN KEY ("agent_id") REFERENCES "agents" ("agent_id");

ALTER TABLE "player_rebate_rates" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "agent_shares" ADD FOREIGN KEY ("agent_id") REFERENCES "agents" ("agent_id");

ALTER TABLE "game_records_by_period" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "game_records_by_day" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "agent_records_by_day" ADD FOREIGN KEY ("game_records_by_day_id") REFERENCES "game_records_by_day" ("game_records_by_day_id");

ALTER TABLE "agent_records_by_day" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "agent_records_by_day" ADD FOREIGN KEY ("agent_id") REFERENCES "agents" ("agent_id");

ALTER TABLE "agent_records_by_day" ADD FOREIGN KEY ("child_agent_id") REFERENCES "agents" ("agent_id");

ALTER TABLE "player_bank_accounts" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "player_wallets" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "deposit_transactions" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "deposit_transactions" ADD FOREIGN KEY ("admin_bank_account_id") REFERENCES "admin_bank_accounts" ("admin_bank_account_id");

ALTER TABLE "withdrawal_transactions" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "withdrawal_transactions" ADD FOREIGN KEY ("player_bank_account_id") REFERENCES "player_bank_accounts" ("player_bank_account_id");

ALTER TABLE "transfer_in_transactions" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "transfer_out_transactions" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "wallet_requests" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "game_actions" ADD FOREIGN KEY ("game_round_info_id") REFERENCES "game_round_infos" ("game_round_info_id");

ALTER TABLE "game_round_infos" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "unprocessed_game_round_infos" ADD FOREIGN KEY ("game_round_info_id") REFERENCES "game_round_infos" ("game_round_info_id");

ALTER TABLE "game_record_rounds" ADD FOREIGN KEY ("game_round_info_id") REFERENCES "game_round_infos" ("game_round_info_id");

ALTER TABLE "game_record_rounds" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "game_record_rounds" ADD FOREIGN KEY ("game_records_by_period_id") REFERENCES "game_records_by_period" ("game_records_by_period_id");




select * from player_login_logs ;
select * from admin_login_logs; -- from admin, no need to mock
select * from manual_adjustments; -- from admin, no need to mock
select * from players;
select * from agents;
select * from admins;
select * from admin_roles;
select * from admin_accesses;
select * from admin_role_accesses;
select * from exchange_rates;
select * from agent_rebate_rates;
select * from player_rebate_rates;
select * from agent_shares;
select * from game_records_by_period;
select * from game_records_by_day;
select * from agent_records_by_day;
select * from admin_bank_accounts;
select * from player_bank_accounts;
select * from player_wallets; 
select * from deposit_transactions;
select cdate , wt.* from withdrawal_transactions wt;
select * from transfer_in_transactions;
select * from transfer_out_transactions;
select * from all_ow_requests;
select * from wallet_requests;
select * from game_actions;
select * from game_round_infos order by cdate desc;
select * from unprocessed_game_round_infos;
select * from game_record_rounds;
select * from sg_games;
select * from sg_categories;
select * from fl_categories;
select * from categories_mappings;
select * from sg_merchants;
select * from sg_countries_restrictions;
select * from sg_merchants_currencies;




