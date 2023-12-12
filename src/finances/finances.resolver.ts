import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancesService } from './finances.service';
import {  DepositEntity,WithdrawalEntity } from './entities/finance.entity';
import { CreateBankAccountInput, UpdateBankAccountInput } from './dto/create-finance.input';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { BankAccountEntity } from './entities/bankaccount.entity';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class FinancesResolver {
  constructor(private readonly financesService: FinancesService) {}




  @Query(() => [DepositEntity], { name: 'deposits' })
  getDeposits() {
    return this.financesService.getDeposits();
  }

  @Query(() => [WithdrawalEntity], { name: 'withdrawals' })
  getWithdrawals() {
    return this.financesService.getWithdrawals();
  }


  @Query(() => [BankAccountEntity], { name: 'bankaccounts' })
  getBankAccounts() {
    return this.financesService.getBankAccounts();
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
  getGameRebates() {
    
  }
  

 
}
