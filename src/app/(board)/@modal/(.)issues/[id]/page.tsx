import { BackButton } from '@/components/back-button/back-button';
import { DialogTitle } from '@radix-ui/react-dialog';
import { IssueDetails } from '@/components/issue-details/issue-details';
import { Modal } from '@/components/modal';

interface IssuePageProps {
  params: Promise<{ id: string }>;
}

export default async function IssueModal({ params }: IssuePageProps) {
  const { id } = await params;

  return (
    <Modal>
      <div className="flex flex-col gap-4 p-6">
        <BackButton />

        <DialogTitle className="sr-only">Issue details</DialogTitle>

        <IssueDetails issueId={id} />
      </div>
    </Modal>
  );
}
