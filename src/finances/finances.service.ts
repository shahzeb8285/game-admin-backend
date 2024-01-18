import { Injectable } from '@nestjs/common';
import { CreateBankAccountInput, UpdateBankAccountInput } from './dto/create-finance.input';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class FinancesService {

  constructor(
    private readonly prisma: PrismaService,
  ) { }

  createBankAccount(data: CreateBankAccountInput) {
    return this.prisma.adminBankAccount.create({
      data: {
        ...data
      }
    })
  }


  updateBankAccount(data: UpdateBankAccountInput) {
    const payload: any = {
      ...data,
    }
    delete payload.adminBankAccountID
    return this.prisma.adminBankAccount.update({
      where: {
        admin_bank_account_id: data.admin_bank_account_id,
      },
      data: {
        ...payload
      }
    })
  }

  getDeposits({ skip,take,}) {
    return this.prisma.depositTransaction.findMany({
      skip,take,
      include: {
        players: true,
        admin_bank_accounts: true
      }
    });

  }


  getBankAccounts({skip,take}) {
    return this.prisma.adminBankAccount.findMany({
      skip,take,
      include: {
        deposit_transactions: true,
        withdrawal_transactions: true
      }
    })
  }

  getWithdrawals({ skip,take,}) {
    return this.prisma.withdrawalTransaction.findMany({
      skip,take,
      include: {
        players: true,
        admin_bank_accounts: true
      }
    });

  }



  updateWithdrawal(data: UpdateFinanceInput) {
    return this.prisma.withdrawalTransaction.update({
      where: {
        withdrawal_transaction_id: data.id
      },
      data: {
        status: data.is_enabled ? "SUCCESS" : "REJECTED"
      },
      include: {
        players: true,
        admin_bank_accounts: true
      }
    })
  }


  updateDeposit(data: UpdateFinanceInput) {
    return this.prisma.depositTransaction.update({
      where: {
        deposit_transaction_id: data.id
      },
      data: {
        status: data.is_enabled ? "SUCCESS" : "REJECTED"
      },
      include: {
        players: true,
        admin_bank_accounts: true
      }
    })
  }





}
