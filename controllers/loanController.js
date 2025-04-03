let loans = require('../data/loans.json');

const filterLoans = (req) => {
  let result = [...loans];
  const { status } = req.query;

  if (status) result = result.filter(loan => loan.status === status);
  if (!['admin', 'superAdmin'].includes(req.user.role)) {
    result = result.map(({ applicant: { totalLoan, ...applicant }, ...loan }) => ({
      ...loan,
      applicant
    }));
  }
  return result;
};

exports.getAllLoans = (req, res) => res.json(filterLoans(req));

exports.getUserLoans = (req, res) => {
  console.log(req.params.userEmail);
  
  const userLoans = loans.filter(loan => 
    loan.applicant.email === req.params.userEmail
  );

  let filteredLoans = userLoans;
  if (!['admin', 'superAdmin'].includes(req.user.role)) {
    filteredLoans = userLoans.map(({ applicant: { totalLoan, ...applicant }, ...loan }) => ({
    ...loan,
    applicant
    }));
  }

  res.json({ loans: filteredLoans });
};

exports.getExpiredLoans = (req, res) => {
  const expired = loans.filter(loan => new Date(loan.maturityDate) < new Date());
  res.json(filterLoans({ ...req, query: {} }, expired));
};

exports.deleteLoan = (req, res) => {
  const loanId = req.params.loanId;
  const initialLength = loans.length;

  const updatedLoans = loans.filter(loan => loan.id !== loanId);

  if (updatedLoans.length === initialLength) {
    return res.status(404).json({ message: 'Loan not found' });
  }

  loans = updatedLoans;

  res.json({ message: 'Loan deleted successfully' });
};
