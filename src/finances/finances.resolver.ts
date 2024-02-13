import {  Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancesService } from './finances.service';
// import { DepositEntity, WithdrawalEntity } from './entities/finance.entity';
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
} from './dto/create-finance.input';
import { admins as Admin } from '../@generated/admins/admins.model';

import { UpdateFinanceInput } from './dto/update-finance.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { deposit_transactionsWhereInput as DepositTransactionWhereInput } from '../@generated/deposit-transactions/deposit-transactions-where.input';
import { withdrawal_transactionsWhereInput as WithdrawalTransactionWhereInput } from '../@generated/withdrawal-transactions/withdrawal-transactions-where.input';
import { admin_bank_accountsWhereInput as AdminBankAccountWhereInput } from '../@generated/admin-bank-accounts/admin-bank-accounts-where.input';
import { deposit_transactions } from 'src/@generated/deposit-transactions/deposit-transactions.model';
import { withdrawal_transactions } from 'src/@generated/withdrawal-transactions/withdrawal-transactions.model';
import { admin_bank_accounts } from 'src/@generated/admin-bank-accounts/admin-bank-accounts.model';
import {  } from 'src/@generated/admin-bank-accounts/admin-bank-accounts-max-order-by-aggregate.input';
import { withdrawal_transactionsOrderByWithAggregationInput } from 'src/@generated/withdrawal-transactions/withdrawal-transactions-order-by-with-aggregation.input';
import { deposit_transactionsOrderByWithAggregationInput } from 'src/@generated/deposit-transactions/deposit-transactions-order-by-with-aggregation.input';
import { admin_bank_accountsOrderByWithAggregationInput } from 'src/@generated/admin-bank-accounts/admin-bank-accounts-order-by-with-aggregation.input';
import { OkResponse } from 'src/common/models/OkResponse.model';
import { TransactionActionDto } from './dto/transaction.action.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from 'src/common/configs/config.interface';
import { firstValueFrom } from 'rxjs';
import { transfer_in_transactions } from 'src/@generated/transfer-in-transactions/transfer-in-transactions.model';
import { transfer_in_transactionsWhereInput } from 'src/@generated/transfer-in-transactions/transfer-in-transactions-where.input';
import { transfer_in_transactionsOrderByWithAggregationInput } from 'src/@generated/transfer-in-transactions/transfer-in-transactions-order-by-with-aggregation.input';
import { transfer_out_transactions } from 'src/@generated/transfer-out-transactions/transfer-out-transactions.model';
import { transfer_out_transactionsWhereInput } from 'src/@generated/transfer-out-transactions/transfer-out-transactions-where.input';
import { transfer_out_transactionsOrderByWithAggregationInput } from 'src/@generated/transfer-out-transactions/transfer-out-transactions-order-by-with-aggregation.input';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class FinancesResolver {
  constructor(private readonly financesService: FinancesService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,

    ) { }

  @Query(() => [deposit_transactions], { name: 'deposits' })
  async getDeposits(
    @Args({ name: 'where', defaultValue: {} })
    where: DepositTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} }) orderBy: deposit_transactionsOrderByWithAggregationInput,

  ) {
    const data = await this.financesService.getDeposits({ skip, take, where,orderBy});
    return data
  }


  @Query(() => [transfer_in_transactions])
  async getTransferIn(
    @Args({ name: 'where', defaultValue: {} })
    where: transfer_in_transactionsWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} }) orderBy: transfer_in_transactionsOrderByWithAggregationInput,

  ) {
    const data = await this.financesService.getTransferIn({ skip, take, where,orderBy});
    return data
  }

  @Query(() => [transfer_out_transactions])
  async getTransferOut(
    @Args({ name: 'where', defaultValue: {} })
    where: transfer_out_transactionsWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} }) orderBy: transfer_out_transactionsOrderByWithAggregationInput,

  ) {
    const data = await this.financesService.getTransferOut({ skip, take, where,orderBy});
    return data
  }


  @Query(() => [withdrawal_transactions], { name: 'withdrawals' })
  getWithdrawals(
    @Args({ name: 'where', defaultValue: {} })
    where: WithdrawalTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} }) orderBy: withdrawal_transactionsOrderByWithAggregationInput,

  ) {
    return this.financesService.getWithdrawals({ skip, take, where ,orderBy});
  }

  @Query(() => [admin_bank_accounts], { name: 'adminBankAccounts' })
  getBankAccounts(
    @Args({ name: 'where', defaultValue: {} })
    where: AdminBankAccountWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} }) orderBy: admin_bank_accountsOrderByWithAggregationInput,

  ) {
    return this.financesService.getBankAccounts({ skip, take, where,orderBy });
  }

  @Mutation(() => withdrawal_transactions)
  updateWithdrawal(@Args('data') input: UpdateFinanceInput) {
    return this.financesService.updateWithdrawal(input);
  }

  @Mutation(() => deposit_transactions)
  updateDeposit(@Args('data') input: UpdateFinanceInput) {
    return this.financesService.updateDeposit(input);
  }

  @Mutation(() => admin_bank_accounts)
  createBankAccount(@Args('data') input: CreateBankAccountInput) {
    return this.financesService.createBankAccount(input);
  }



  @Mutation(() => OkResponse)
  async transactionAction(@Args('data') input: TransactionActionDto,
    @UserEntity() user: Admin,
  ) {
    const payload = {
      ...input,
      processedBy:user.admin_id
    }
    const securityConfig = this.configService.get<AppConfig>('appConfig');
    const req = this.httpService.post(`${securityConfig.externalApiPath}/transactionRequest`, payload)
    const resp = await firstValueFrom(req)
    return {message:resp.data}
  }


  @Mutation(() => admin_bank_accounts)
  updateBankAccount(@Args('data') input: UpdateBankAccountInput) {
    return this.financesService.updateBankAccount(input);
  }

  @Query(() => [admin_bank_accounts], { name: 'gamerebates' })
  getGameRebates() {}
}
