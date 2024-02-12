import {  Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancesService } from './finances.service';
// import { DepositEntity, WithdrawalEntity } from './entities/finance.entity';
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
} from './dto/create-finance.input';
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

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class FinancesResolver {
  constructor(private readonly financesService: FinancesService) {}

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

  @Mutation(() => admin_bank_accounts)
  updateBankAccount(@Args('data') input: UpdateBankAccountInput) {
    return this.financesService.updateBankAccount(input);
  }

  @Query(() => [admin_bank_accounts], { name: 'gamerebates' })
  getGameRebates() {}
}
