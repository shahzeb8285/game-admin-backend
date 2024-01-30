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

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class FinancesResolver {
  constructor(private readonly financesService: FinancesService) {}

  @Query(() => [DepositEntity], { name: 'deposits' })
  getDeposits(
    @Args({ name: 'where', defaultValue: {} })
    where: DepositTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.financesService.getDeposits({ skip, take, where });
  }

  @Query(() => [WithdrawalEntity], { name: 'withdrawals' })
  getWithdrawals(
    @Args({ name: 'where', defaultValue: {} })
    where: WithdrawalTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.financesService.getWithdrawals({ skip, take, where });
  }

  @Query(() => [BankAccountEntity], { name: 'bankaccounts' })
  getBankAccounts(
    @Args({ name: 'where', defaultValue: {} })
    where: AdminBankAccountWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.financesService.getBankAccounts({ skip, take, where });
  }

  @Mutation(() => WithdrawalEntity)
  updateWithdrawal(@Args('data') input: UpdateFinanceInput) {
    return this.financesService.updateWithdrawal(input);
  }

  @Mutation(() => DepositEntity)
  updateDeposit(@Args('data') input: UpdateFinanceInput) {
    return this.financesService.updateDeposit(input);
  }

  @Mutation(() => BankAccountEntity)
  createBankAccount(@Args('data') input: CreateBankAccountInput) {
    return this.financesService.createBankAccount(input);
  }

  @Mutation(() => BankAccountEntity)
  updateBankAccount(@Args('data') input: UpdateBankAccountInput) {
    return this.financesService.updateBankAccount(input);
  }

  @Query(() => [BankAccountEntity], { name: 'gamerebates' })
  getGameRebates() {}
}
