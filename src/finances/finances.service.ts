import { Injectable } from '@nestjs/common';
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
} from './dto/create-finance.input';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { PrismaService } from 'nestjs-prisma';
import { bank_method } from 'src/@generated/prisma/bank-method.enum';
import { wallet_transaction_status } from 'src/@generated/prisma/wallet-transaction-status.enum';

@Injectable()
export class FinancesService {
  constructor(private readonly prisma: PrismaService) {}

  createBankAccount(data: CreateBankAccountInput) {
    return this.prisma.admin_bank_accounts.create({
      data: {
        ...data,
        method: bank_method[data.method],
      },
    });
  }

  updateBankAccount(data: UpdateBankAccountInput) {
    const payload: any = {
      ...data,
    };
    delete payload.adminBankAccountID;
    return this.prisma.admin_bank_accounts.update({
      where: {
        admin_bank_account_id: data.admin_bank_account_id,
      },
      data: {
        ...payload,
      },
    });
  }

  getDeposits({ skip, take, where, orderBy }) {
    return this.prisma.deposit_transactions.findMany({
      skip,
      orderBy,
      take,
      where,
      include: {
        players: {
          include: {
            agent: true,
          },
        },

        // players: true,
        admin_bank_account: true,
      },
    });
  }

  getBankAccounts({ skip, take, where,orderBy }) {
    return this.prisma.admin_bank_accounts.findMany({
      skip,
      take,
      where,
      orderBy,
      
      include: {
        deposit_transactions: true,

        // withdrawal_transactions: true,
      },
    });
  }

  getWithdrawals({ skip, take, where ,orderBy}) {
    return this.prisma.withdrawal_transactions.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        players: {
          include: {
            agent: true,
          },
        },
        player_bank_account: true,
      },
    });
  }

  updateWithdrawal(data: UpdateFinanceInput) {
    return this.prisma.withdrawal_transactions.update({
      where: {
        withdrawal_transaction_id: data.id,
      },
      data: {
        status: data.is_enabled
          ? wallet_transaction_status.SUCCESS
          : wallet_transaction_status.FAILED,
      },
      include: {
        players: true,
        player_bank_account: true,
      },
    });
  }

  updateDeposit(data: UpdateFinanceInput) {
    return this.prisma.deposit_transactions.update({
      where: {
        deposit_transaction_id: data.id,
      },
      data: {
        status: data.is_enabled
          ? wallet_transaction_status.SUCCESS
          : wallet_transaction_status.FAILED,
      },
      include: {
        players: true,
        admin_bank_account: true,
      },
    });
  }
}
