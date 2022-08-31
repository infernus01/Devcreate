import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css'
export default function Faq() {
  return (
    <div>
    <div className="faq">
    <div className="faqHeading">
        Frequently Asked Questions (FAQs)
    </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi officiis omnis facere id, dicta similique praesentium. Laborum consectetur facilis explicabo? Iusto, sint distinctio? Adipisci quisquam ab nobis neque tempore.
            Sint, magni? Eos iure voluptas ducimus delectus, inventore quisquam provident consequatur animi eum totam, non asperiores. Autem, dolorem fuga? Odio voluptatibus ratione eius nesciunt minus ipsam nihil, quis consectetur eveniet.
            Inventore, qui id minus eligendi, eos illum saepe cumque ex dignissimos vel incidunt asperiores dolorum optio harum laudantium veritatis laborum quam consectetur libero dolore sunt ad labore et! Dolorem, distinctio?
            Itaque nihil porro, ratione sequi at voluptates beatae? Vitae tempore illo, delectus qui nobis magni aut officia, expedita ipsum vero ab eveniet consectetur est nesciunt. Suscipit accusantium velit obcaecati quos?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quisquam sit autem velit. Nulla qui, beatae incidunt perspiciatis ad veritatis fugit cumque suscipit id harum sint reprehenderit. Expedita, maiores illo.
           Soluta facilis optio aut ipsum accusamus nulla adipisci incidunt deleniti alias quia maiores pariatur quos delectus cumque voluptatibus, blanditiis exercitationem impedit velit ipsa maxime! Aperiam ducimus porro sequi repudiandae commodi.
           Suscipit sit ea dolorem praesentium eius voluptas nobis quos rem dolor, quibusdam repudiandae impedit distinctio laudantium voluptatibus numquam eaque et ducimus. Eius ex aliquid eos sapiente voluptatibus ipsa ullam pariatur?
           Suscipit, vel veniam alias voluptates, labore facilis molestiae possimus placeat tempore incidunt necessitatibus corrupti amet animi quaerat doloremque perferendis, voluptatem quod iure. Quia saepe dolor perferendis placeat est cumque velit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
