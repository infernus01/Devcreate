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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
