import { format } from 'date-fns';

export const formatDatefromApi = date => {
  return format(Date.parse(date), 'd MMMM yyyy');
};

export const calculateVotes = votes => {
  if (votes === 0) {
    return votes;
  } else {
    return votes.toFixed(1);
  }
};
