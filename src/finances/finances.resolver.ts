import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancesService } from './finances.service';
import { DepositEntity, WithdrawalEntity } from './entities/finance.entity';
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
} from './dto/create-finance.input';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { BankAccountEntity } from './entities/bankaccount.entity';
import { deposit_transactionsWhereInput as DepositTransactionWhereInput } from '../@generated/deposit-transactions/deposit-transactions-where.input';
import { withdrawal_transactionsWhereInput as WithdrawalTransactionWhereInput } from '../@generated/withdrawal-transactions/withdrawal-transactions-where.input';
import { admin_bank_accountsWhereInput as AdminBankAccountWhereInput } from '../@generated/admin-bank-accounts/admin-bank-accounts-where.input';
import { deposit_transactions } from 'src/@generated/deposit-transactions/deposit-transactions.model';
import { withdrawal_transactions } from 'src/@generated/withdrawal-transactions/withdrawal-transactions.model';
import { admin_bank_accounts } from 'src/@generated/admin-bank-accounts/admin-bank-accounts.model';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class FinancesResolver {
  constructor(private readonly financesService: FinancesService) {}

  @Query(() => [deposit_transactions], { name: 'deposits' })
  async getDeposits(
    @Args({ name: 'where', defaultValue: {} })
    where: DepositTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    const data = await this.financesService.getDeposits({ skip, take, where });
    console.log("getDeposits",{dsaaa:data[0]})
    return data
  }

  @Query(() => [withdrawal_transactions], { name: 'withdrawals' })
  getWithdrawals(
    @Args({ name: 'where', defaultValue: {} })
    where: WithdrawalTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.financesService.getWithdrawals({ skip, take, where });
  }

  @Query(() => [admin_bank_accounts], { name: 'adminBankAccounts' })
  getBankAccounts(
    @Args({ name: 'where', defaultValue: {} })
    where: AdminBankAccountWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.financesService.getBankAccounts({ skip, take, where });
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
