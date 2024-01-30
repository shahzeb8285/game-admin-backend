import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';
// import { Player } from '../../players/entities/player.entity';
import { BankAccountEntity } from './bankaccount.entity';

import { registerEnumType } from '@nestjs/graphql';
import { players as Player } from '../../@generated/players/players.model';
import { wallet_transaction_status as TransactionType } from '../../@generated/prisma/wallet-transaction-status.enum';

// export enum TransactionType {
//     PENDING = "PENDING",
//     REJECTED = "REJECTED",
//     SUCCESS = "SUCCESS"
// }

// registerEnumType(TransactionType, { name: 'TransactionType', description: undefined })

@ObjectType()
export class DepositEntity {
  @Field(() => String, { nullable: false })
  deposit_transaction_id!: string;

  @Field(() => String, { nullable: false })
  player_id!: string;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => String, { nullable: false })
  currency!: string;

  @Field(() => Date, { nullable: false })
  request_time!: Date;

  @Field(() => Date, { nullable: false })
  process_time!: Date;

  @Field(() => String, { nullable: false })
  processed_by!: string;

  @Field(() => String, { nullable: false })
  transaction_date!: string;

  @Field(() => TransactionType, { nullable: false, defaultValue: 'PENDING' })
  status!: TransactionType;

  @Field(() => String, { nullable: false })
  admin_bank_account_id!: string;

  @Field(() => Player, { nullable: false })
  players?: Player;

  @Field(() => BankAccountEntity, { nullable: false })
  admin_bank_accounts?: BankAccountEntity;
}

@ObjectType()
export class WithdrawalEntity {
  @Field(() => ID, { nullable: false })
  withdrawal_transaction_id!: string;

  @Field(() => String, { nullable: false })
  player_id!: string;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => String, { nullable: false })
  currency!: string;

  @Field(() => Date, { nullable: false })
  request_time!: Date;

  @Field(() => Date, { nullable: false })
  process_time!: Date;

  @Field(() => String, { nullable: false })
  processed_by!: string;

  @Field(() => String, { nullable: false })
  transaction_date!: string;

  @Field(() => TransactionType, { nullable: false, defaultValue: 'PENDING' })
  status!: TransactionType;

  @Field(() => String, { nullable: false })
  admin_bank_account_id!: string;

  @Field(() => Player, { nullable: false })
  players?: Player;

  @Field(() => BankAccountEntity, { nullable: false })
  admin_bank_accounts?: BankAccountEntity;
}
