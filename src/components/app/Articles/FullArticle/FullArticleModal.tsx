import Article from '@/components/app/Articles/Article';

export default function ArticleModal() {
  return (
    <div
      id="scroll-inside-modal"
      className="overlay modal overlay-open:opacity-100 overlay-open:duration-200"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <Article />
        </div>
      </div>
    </div>
  );
} 
