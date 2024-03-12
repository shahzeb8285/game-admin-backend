import { Query, Mutation, Args, Int } from '@nestjs/graphql';
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
import {} from 'src/@generated/admin-bank-accounts/admin-bank-accounts-max-order-by-aggregate.input';
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
import { GetGameRebateInput } from './dto/get-game-rebate-input';
import {
  AgentGameRebateEntity,
  PlayerGameRebateEntity,
} from './entities/gamerebate.entity';
import { UpdateGameRebateInput } from './dto/update-game-rebate.input';
import { FinancialStatementEntity } from './entities/financialstatement.entity';
import { FinancialStatementWhereInput } from './dto/financialstatement-where.input';
import { IncomeStatementWhereInput } from './dto/income-statement.where.input';
import { IncomeStatementEntity } from './entities/incomestatement.entity';
import { RebateShare } from './entities/rebate_share.entity';
import { RebateShareInput } from './dto/rebate_share.input';
import { banks } from 'src/@generated/banks/banks.model';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class FinancesResolver {
  constructor(
    private readonly financesService: FinancesService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  @Query(() => [deposit_transactions], { name: 'deposits' })
  async getDeposits(
    @Args({ name: 'where', defaultValue: {} })
    where: DepositTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: deposit_transactionsOrderByWithAggregationInput,
  ) {
    const data = await this.financesService.getDeposits({
      skip,
      take,
      where,
      orderBy,
    });
    return data;
  }

  @Query(() => [transfer_in_transactions])
  async getTransferIn(
    @Args({ name: 'where', defaultValue: {} })
    where: transfer_in_transactionsWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: transfer_in_transactionsOrderByWithAggregationInput,
  ) {
    const data = await this.financesService.getTransferIn({
      skip,
      take,
      where,
      orderBy,
    });
    return data;
  }

  @Query(() => [transfer_out_transactions])
  async getTransferOut(
    @Args({ name: 'where', defaultValue: {} })
    where: transfer_out_transactionsWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: transfer_out_transactionsOrderByWithAggregationInput,
  ) {
    const data = await this.financesService.getTransferOut({
      skip,
      take,
      where,
      orderBy,
    });
    return data;
  }

  @Query(() => [withdrawal_transactions], { name: 'withdrawals' })
  getWithdrawals(
    @Args({ name: 'where', defaultValue: {} })
    where: WithdrawalTransactionWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: withdrawal_transactionsOrderByWithAggregationInput,
  ) {
    return this.financesService.getWithdrawals({ skip, take, where, orderBy });
  }

  @Query(() => [admin_bank_accounts], { name: 'adminBankAccounts' })
  getBankAccounts(
    @Args({ name: 'where', defaultValue: {} })
    where: AdminBankAccountWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: admin_bank_accountsOrderByWithAggregationInput,
  ) {
    return this.financesService.getBankAccounts({ skip, take, where, orderBy });
  }

  @Query(() => [banks], { name: 'getBanks' })
  getBanks() {
    return this.financesService.getBanks();
  }

  @Query(() => AgentGameRebateEntity)
  async getAgentGameRebate(
    @Args({ name: 'where', defaultValue: {} })
    where: GetGameRebateInput,
  ) {
    const resp = await this.financesService.getAgentGameRebate(where.id);
    return resp;
  }

  @Query(() => PlayerGameRebateEntity)
  getPlayerGameRebate(
    @Args({ name: 'where', defaultValue: {} })
    where: GetGameRebateInput,
  ) {
    return this.financesService.getPlayerGameRebate(where.id);
  }

  @Query(() => FinancialStatementEntity)
  getFinancialStatement(
    @Args({ name: 'where', defaultValue: {} })
    where: FinancialStatementWhereInput,
  ) {
    return this.financesService.getFinancialStatement(where);
  }

  @Query(() => IncomeStatementEntity)
  getIncomeStatement(
    @Args({ name: 'where', defaultValue: {} })
    where: IncomeStatementWhereInput,
  ) {
    return this.financesService.getIncomeStatementByParent(where);
  }

  // @Query(() => RebateShare)
  // getAgentShare(
  //   @Args({ name: 'data', defaultValue: {} })
  //   input: RebateShareInput,
  // ) {
  //   return this.financesService.getIncomeStatementByParent(data);
  // }

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
  async transactionAction(
    @Args('data') input: TransactionActionDto,
    @UserEntity() user: Admin,
  ) {
    const payload = {
      ...input,
      processedBy: user.admin_id,
    };

    const securityConfig = this.configService.get<AppConfig>('appConfig');
    const req = this.httpService.post(
      `${securityConfig.externalApiPath}/transactionRequest`,
      payload,
    );
    const resp = await firstValueFrom(req);
    console.log('Asasas', resp);
    return { message: resp.data };
  }

  @Mutation(() => admin_bank_accounts)
  updateBankAccount(@Args('data') input: UpdateBankAccountInput) {
    return this.financesService.updateBankAccount(input);
  }

  @Mutation(() => OkResponse)
  updateAgentGameRebates(
    @Args('data') input: UpdateGameRebateInput,
    @UserEntity() user: Admin,
  ) {
    return this.financesService.updateAgentGameRebates(input, user.admin_id);
  }

  @Mutation(() => OkResponse)
  updateDefaultPlayerGameRebates(
    @Args('data') input: UpdateGameRebateInput,
    @UserEntity() user: Admin,
  ) {
    return this.financesService.updateDefaultPlayerGameRebates(
      input,
      user.admin_id,
    );
  }
  @Mutation(() => OkResponse)
  updateAllPlayerGameRebates(
    @Args('data') input: UpdateGameRebateInput,
    @UserEntity() user: Admin,
  ) {
    return this.financesService.updateAllPlayerGameRebates(
      input,
      user.admin_id,
    );
  }

  @Mutation(() => OkResponse)
  updatePlayerGameRebates(
    @Args('data') input: UpdateGameRebateInput,
    @UserEntity() user: Admin,
  ) {
    return this.financesService.updatePlayerGameRebates(input, user.admin_id);
  }
}
