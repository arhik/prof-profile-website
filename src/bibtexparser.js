// parser = require("bibtex-parser")

var parser = require("bibtex-parser");

export class Bibtexparser{
	constructor(){
		this.bibliography = "@inproceedings{Lysenko:2010:GMC:1839778.1839781,\
							 author = {Lysenko, Mikola and Nelaturi, Saigopal and Shapiro, Vadim},\
							 title = {Group morphology with convolution algebras},\
							 booktitle = {Proceedings of the 14th ACM Symposium on Solid and Physical Modeling},\
							 series = {SPM '10},\
							 year = {2010},\
							 isbn = {978-1-60558-984-8},\
							 location = {Haifa, Israel},\
							 pages = {11--22},\
							 numpages = {12},\
							 url = {http://doi.acm.org/10.1145/1839778.1839781},\
							 doi = {10.1145/1839778.1839781},\
							 acmid = {1839781},\
							 publisher = {ACM},\
							 address = {New York, NY, USA},\
							}";
		this.parsedbib = "";
		this.bibliographies = '@BOOK{b.FioMultiCore,\
  author =       {S. Rajasekaran and <b>L. Fiondella</b> and M.F. Ahmed and R.A. Ammar},\
  editor =       {S. Sahni},\
  title =        {Multicore Computing: Algorithms, Architectures, and Applications},\
  publisher =    {Chapman \& Hall/CRC},\
  year =         {2013},\
  volume =       {},\
  number =       {},\
  series =       {Computer \& Information Science Series},\
  address =      {},\
  edition =      {},\
  month =        {dec},\
  isbn =         {1439854343},\
}\
@ARTICLE{jFio23,\
  author =       {X. Li and Y. Lin and <b>L. Fiondella</b> and Y. Zhou},\
  title =        {Software Reliability Analysis considering Correlated Component Failures with Coupling Measurement Framework},\
  journal =      {Journal of System Engineering and Electronics},\
  year =         {in press},\
  volume =       {},\
  number =       {},\
  pages =        {},\
  month =        {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
  source =       {},\
}\
@article{jFioTVB,\
year={2015},\
volume={},\
number={},\
issn={0254-5330},\
journal={Annals of Operations Research},\
doi={10.1007/s10479-015-1798-4},\
title={Trivariate Bernoulli Distribution with Application to Software Fault Tolerance},\
url={http://dx.doi.org/10.1007/s10479-015-1798-4},\
publisher={Springer US},\
keywords={Trivariate Bernoulli distribution; Fault tolerance; Software reliability; $$N$$ N -version programming},\
author={<b>L. Fiondella</b> and P. Zeephongsekul},\
pages={1-15},\
language={English}\
}\
@ARTICLE{jFio21,\
author={<b>L. Fiondella</b> and Y.-K. Lin and P.-C. Chang},\
journal={IEEE Transactions on Systems, Man, and Cybernetics: Systems},\
title={System Performance and Reliability Modeling of a Stochastic-Flow Production Network: A Confidence-Based Approach},\
url={http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=7038206&filter%3DAND%28p_IS_Number%3A6376248%29},\
year={2015},\
month={},\
volume={PP},\
number={99},\
pages={1-1},\
keywords={Probability;Production systems;Raw materials;Reliability;Vectors;Workstations;Discrete time Markov chain (DTMC);stochastic-flow production network (SFPN);system reliability;yield confidence},\
doi={10.1109/TSMC.2015.2394481},\
ISSN={2168-2216},}\
@ARTICLE{jFio20,\
  author =       {X. Li and Y. Yin and <b>L. Fiondella</b>},\
  title =        {Reliability and Performance Analysis of Architecture-Based Software Implementing Restarts and Retries Subject to Correlated Component Failures},\
  journal =      {International Journal of Software Engineering and Knowledge Engineering},\
  year =         {in press},\
  volume =       {},\
  number =       {},\
  pages =        {},\
  month =        {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
  source =       {},\
}\
@article{jFio19,\
title = "Discrete and Continuous Reliability Models for Systems with Identically Distributed Correlated Components",\
journal = "Reliability Engineering \& System Safety",\
volume = "133",\
number = "",\
pages = "1-10",\
year = "2015",\
note = "",\
issn = "0951-8320",\
doi = "http://dx.doi.org/10.1016/j.ress.2014.08.004",\
url = "http://www.sciencedirect.com/science/article/pii/S0951832014001975",\
author = "<b>L. Fiondella</b> and L. Xing",\
keywords = "Identically correlated components",\
keywords = "Correlated failure",\
keywords = "Fault tolerance",\
keywords = "Reliability bound",\
keywords = "Discrete reliability model",\
keywords = "Continuous reliability model "\
}\
@ARTICLE{jFio18,\
author={R.B. Duffey and <b>L. Fiondella</b>},\
journal={IEEE Transactions on Human-Machine Systems},\
title={Software, Hardware, and Procedure Reliability by Testing and Verification: Evidence of Learning Trends},\
year={2014},\
month={jun},\
volume={44},\
number={3},\
pages={395-405},\
keywords={formal verification;mathematical analysis;program testing;software reliability;stochastic processes;Poisson process;Stevens-Savin equation;hardware reliability;historical literature;human element;learning theory;learning trends;mathematical models;procedure reliability;reliability engineering;research community;software reliability;Hardware;Market research;Reliability theory;Software;Software reliability;Testing;Reliability growth;software reliability;software testing;tester learning},\
doi={10.1109/THMS.2014.2306932},\
url={http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6762959},\
ISSN={2168-2291},}\
@ARTICLE{jFio17,\
  author =       {A. Rahman and <b>L. Fiondella</b> and N.E. Lownes},\
  title =        {A Bi-Objective Approach to Evaluate Highway Routing and Regulatory Strategies for Hazardous Materials Transportation},\
  journal =      {Journal of the Transportation Research Forum},\
  year =         {2014},\
  volume =       {53},\
  number =       {1},\
  pages =        {7-22},\
  month =        {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
  source =       {},\
  url =          {http://www.trforum.org/journal/downloads/2014v53n1_01_HazardousMaterials.pdf},\
}\
@article{jFio16,\
title = "Simulation Approach to Estimate the System Reliability of a Time-based Capacitated Flow Network Susceptible to Correlated Failures",\
journal = "Simulation Modelling Practice and Theory",\
volume = "36",\
number = "8",\
pages = "74-83",\
year = "2013",\
note = "",\
issn = "1569-190X",\
doi = "http://dx.doi.org/10.1016/j.simpat.2013.04.008",\
url = "http://www.sciencedirect.com/science/article/pii/S1569190X13000798",\
author = "Y.-K. Lin and <b>L. Fiondella</b> and P.-C. Chang",\
keywords = "Correlated failure",\
keywords = "Time-based capacitated flow network (TCFN)",\
keywords = "System reliability",\
keywords = "Simulation "\
}\
@article{jFio15,\
  title={Security and Performance Analysis of Passenger Screening for Mass-transit},\
  author={<b>L. Fiondella</b> and S.S. Gokhale and N.E Lownes and M. Accorsi},\
  journal={Homeland Security Affairs},\
  volume={9},\
  number={},\
  pages={},\
  month = {apr},\
  year={2013},\
  publisher={Naval Postgraduate School Center for Homeland Defense and Security},\
  url={https://www.chds.us/?serve&dl&f=/resources/journal/supplement/issue6/pdfs/supplement.6.3.pdf}\
}\
@ARTICLE{jFio14,\
author={<b>L. Fiondella</b> and S. Rajasekaran and S.S. Gokhale},\
journal={IEEE Transactions on Reliability},\
title={Efficient Software Reliability Analysis with Correlated Component Failures},\
year={2013},\
month={mar},\
volume={62},\
number={1},\
pages={244-255},\
keywords={correlation methods;object-oriented programming;software architecture;software reliability;COCOF;application architecture;component-based software system;correlated component failures;correlation identification;software application reliability;software reliability analysis;Computer architecture;Correlation;Encoding;Software reliability;Software systems;Correlated failures;importance measures;sensitivity analysis;software architecture;software reliability},\
doi={10.1109/TR.2013.2241131},\
url={http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6423244&contentType=Journals+%26+Magazines&sortType%3Dasc_p_Sequence%26filter%3DAND%28p_IS_Number%3A6471782%29},\
ISSN={0018-9529},}\
@article{jFio13,\
title = "Quantifying the Impact of Correlated Failures on System Reliability by a Simulation Approach",\
journal = "Reliability Engineering \& System Safety",\
volume = "109",\
number = "",\
pages = "32-40",\
year = "2013",\
month = "jan",\
note = "",\
issn = "0951-8320",\
doi = "http://dx.doi.org/10.1016/j.ress.2012.08.008",\
url = "http://www.sciencedirect.com/science/article/pii/S0951832012001603",\
author = "Y.-K. Lin and <b>L. Fiondella</b> and P.-C. Chang",\
keywords = "Correlated failure",\
keywords = "Simulation",\
keywords = "Stochastic-flow network (SFN)",\
keywords = "System reliability "\
}\
@article{jFio12,\
title = "A Study of Correlated Failures on the Network Reliability of Power Transmission Systems",\
journal = "International Journal of Electrical Power \& Energy Systems",\
volume = "43",\
number = "1",\
pages = "954-960",\
year = "2012",\
month = "dec",\
note = "",\
issn = "0142-0615",\
doi = "http://dx.doi.org/10.1016/j.ijepes.2012.06.060",\
url = "http://www.sciencedirect.com/science/article/pii/S0142061512003225",\
author = "Y.-K. Lin and P.-C. Chang and <b>L. Fiondella</b>",\
keywords = "Power transmission network",\
keywords = "Reliability",\
keywords = "Correlated failure",\
keywords = "Stochastic-flow network (SFN) "\
}\
@ARTICLE{jFio11,\
author={Y.-K. Lin and P.-C. Chang and <b>L. Fiondella</b>},\
journal={IEEE Transactions on Reliability},\
title={Quantifying the Impact of Correlated Failures on Stochastic Flow Network Reliability},\
year={2012},\
month={sep},\
volume={61},\
number={3},\
pages={692-701},\
keywords={computer network reliability;probability;stochastic processes;SFN model;SFN reliability;Taiwan academic network;correlated binomial distribution;correlated failure;national computer network;stochastic flow network reliability;Capacity planning;Computational modeling;Computer network reliability;Correlation;Numerical models;Reliability;Vectors;Correlated failure;simulation technique;stochastic-flow network (SFN);stochastic-flow network reliability},\
doi={10.1109/TR.2012.2207535},\
url={http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6239640},\
ISSN={0018-9529},}\
@article{jFio10,\
  title={Uncovering Weaknesses in Code with Cyclomatic Path Analysis},\
  author={T. McCabe and T. McCabe Jr. and <b>L. Fiondella</b>},\
  journal={The Journal of Defense Software Engineering},\
  volume={25},\
  number={4},\
  pages={9-14},\
  year={2012},\
  url={http://static1.1.sqspcdn.com/static/f/702523/19168399/1341802515467/201207-McCabe.pdf?token=fssjMOmrorX7w2UMqG79knglbbY%3D}\
}\
@article{jFio9,\
title = "Communication and Energy Efficient Routing Protocols for Single-hop Radio Networks",\
journal = "Journal of Parallel and Distributed Computing",\
volume = "72",\
number = "6",\
pages = "819-826",\
year = "2012",\
note = "",\
issn = "0743-7315",\
doi = "http://dx.doi.org/10.1016/j.jpdc.2012.03.004",\
url = "http://www.sciencedirect.com/science/article/pii/S074373151200069X",\
author = "S. Rajasekaran and <b>L. Fiondella</b> and D. Sharma and R.A. Ammar and N.E. Lownes",\
keywords = "Radio networks",\
keywords = "Randomized algorithms",\
keywords = "Message routing",\
keywords = "Searching",\
keywords = "Sorting",\
keywords = "Selection "\
}\
@ARTICLE{jFio8,\
author={J. Liu and Z. Zhou and Z. Peng and J.-H. Cui and M. Zuba and <b>L. Fiondella</b>},\
journal={IEEE Transactions on Parallel and Distributed Systems},\
title={Mobi-Sync: Efficient Time Synchronization for Mobile Underwater Sensor Networks},\
year={2013},\
month={feb},\
volume={24},\
number={2},\
pages={406-416},\
keywords={correlation methods;mobile radio;protocols;radiowave propagation;synchronisation;underwater acoustic communication;underwater acoustic propagation;wireless sensor networks;Mobi-Sync;UWSN node;acoustic communication;distributed network;dynamic propagation delay;energy efficiency;mobile underwater sensor network;mobility pattern;sensor node mobility;spatial correlation;synchronization algorithm;terrestrial WSN;terrestrial wireless sensor network;time synchronization protocol;Accuracy;Delay;Linear regression;Propagation delay;Protocols;Synchronization;Wireless sensor networks;UWSNs;sensor node;synchronization},\
doi={10.1109/TPDS.2012.71},\
url={http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6152098},\
ISSN={1045-9219},}\
@ARTICLE{jFio7,\
author={<b>L. Fiondella</b> and S.S. Gokhale},\
journal={IEEE Transactions on Reliability},\
title={Optimal Allocation of Testing Effort Considering Software Architecture},\
year={2012},\
month={jun},\
volume={61},\
number={2},\
pages={580-589},\
keywords={optimisation;program testing;resource allocation;software architecture;software maintenance;software reliability;architecture-based optimization;effort-reliability relationship;optimal resource allocation;software architecture;software development;software maintenance;software reliability;software system;software testing;system architecture;system reliability;Computer architecture;Optimization;Resource management;Software;Software reliability;Testing;Architecture-based optimization;effort minimization;optimization;software architecture;software reliability},\
doi={10.1109/TR.2012.2192016},\
url={http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6179570},\
ISSN={0018-9529},}\
@article{jFio6,\
author = {<b>L. Fiondella</b>},\
title = {Reliability and Sensitivity Analysis of Coherent Systems with Negatively Correlated Component Failures},\
journal = {International Journal of Reliability, Quality and Safety Engineering},\
volume = {17},\
number = {5},\
pages = {505-529},\
year = {2010},\
month = {oct},\
doi = {10.1142/S0218539310003913},\
URL = {http://www.worldscientific.com/doi/abs/10.1142/S0218539310003913},\
eprint = {http://www.worldscientific.com/doi/pdf/10.1142/S0218539310003913}\
}\
@article{jFio5,\
	 author = {S.S. Gokhale and <b>L. Fiondella</b>},\
	 title = {Software Application Design Subject to Cost Constraints: {A}n Evolutionary Approach},\
	 journal = {International Transactions on Systems Sciences and Applications},\
	 volume = 6,\
	 number = 4,\
	 pages = {255-270},\
	 month = {nov},\
	 year = 2010}\
@article{jFio4,\
author = {<b>L. Fiondella</b> and S.S. Gokhale},\
title = {Estimating System Reliability with Correlated Component Failures},\
journal = {International Journal of Reliability and Safety},\
volume = {4},\
number = {2-3},\
pages = {188-205},\
month = {apr},\
year = {2010},\
doi = {10.1504/IJRS.2010.032445},\
URL = {\
        http://www.inderscienceonline.com/doi/abs/10.1504/IJRS.2010.032445\
},\
eprint = {\
        http://www.inderscienceonline.com/doi/pdf/10.1504/IJRS.2010.032445\
}\
,\
    abstract = { Correlated component failures, recognised to be a major impediment in the power of redundancy to improve system reliability, need to be factored into the reliability assessment of fault-tolerant systems. In this paper, we present a methodology to derive an approximate analytical expression for mean reliability of on-demand systems with correlated failures. Applying the methodology, we derive expressions for the mean reliability of common redundant structures, namely, k-out-of-n, series-parallel and bridge systems. We illustrate the potential of these expressions to systematically assess the influence of pairwise component correlations on system reliability. An examination of the error between the system reliability estimates obtained from the analytical expressions to those obtained from simulations indicates that our method accurately captures the trends in system reliability and can hence provide a computationally faster alternative to simulation for system reliability analysis. }\
}\
@article {jFio3,\
author = {<b>L. Fiondella</b> and S.S. Gokhale},\
title = {Importance Measures for Modular Software with Uncertain Parameters},\
journal = {Software Testing, Verification and Reliability},\
volume = {20},\
number = {1},\
publisher = {John Wiley \& Sons, Ltd.},\
issn = {1099-1689},\
url = {http://dx.doi.org/10.1002/stvr.420},\
doi = {10.1002/stvr.420},\
pages = {63-85},\
keywords = {software reliability, software architecture, uncertainty, importance assessment},\
year = {2010},\
month = {jan},\
}\
@article{jFio2,\
author = {<b>L. Fiondella</b>},\
title = {Statistical Inference and Uncertainty Assessment for Multi-state Systems},\
journal = {International Journal of Reliability, Quality and Safety Engineering},\
volume = {16},\
number = {5},\
pages = {453-467},\
year = {2009},\
doi = {10.1142/S0218539309003496},\
URL = {http://www.worldscientific.com/doi/abs/10.1142/S0218539309003496},\
eprint = {http://www.worldscientific.com/doi/pdf/10.1142/S0218539309003496}\
}\
@ARTICLE{jFio1,\
  AUTHOR =       {<b>L. Fiondella</b> and S.S. Gokhale},\
  TITLE =        {{S}oftware Reliability Models Incorporating Testing Effort},\
  JOURNAL =      {Journal of the Operational Research Society of India},\
  YEAR =         {2008},\
  volume =       {45},\
  number =       {4},\
  pages =        {352-369},\
  month =        {},\
}\
@INPROCEEDINGS{cFio45,\
  author =       {<b>L. Fiondella</b> and S.S. Gokhale and N.E. Lownes},\
  title =        {{C}rowdsourcing of Automated Congestion Prediction: {A}n Analysis of Architectural Alternatives},\
  booktitle =    {Proc. of International Conference on Software Engineering and Knowledge Engineering (SEKE)},\
  year =         {2015},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {},\
  address =      {Pittsburgh, PA},\
  month =        {jul},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{c44Fio,\
  author =       {S. Bhattacharya and V. Nagaraju and E. Spero and A. Ghoshal and <b>L. Fiondella</b>},\
  title =        {Rotorcraft Tradespace Exploration incorporating Reliability Engineering},\
  booktitle =    {Proc. of American Helicopter Society (AHS) International 71st Annual Forum \& Technology Display},\
  year =         {2015},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {},\
  address =      {Virginia Beach, VA},\
  month =        {may},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio43,\
  author =       {<b>L. Fiondella</b> and R. Duffey},\
  title =        {Software and Human Reliability: {E}rror Reduction and Prediction},\
  booktitle =    {Proc. of the International Topical Meeting on Probabilistic Safety Assessment and Analysis},\
  year =         {2015},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {},\
  address =      {Sun Valley, ID},\
  month =        {apr},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio42,\
  author =       {T. Hsieh and D. Noyes and H. Liu and <b>L. Fiondella</b>},\
  title =        {Quantifying the Impact of Data Loss Incidents on Publically-traded Organizations},\
  booktitle =    {Proc. of the IEEE International Conference on Technologies for Homeland Security (HST)},\
  year =         {2015},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {},\
  address =      {Waltham, MA},\
  month =        {apr},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio41,\
  author =       {V. Basavaraj and D. Noyes and N. Lownes and <b>L. Fiondella</b>},\
  title =        {Mitigating the Impact of Transportation Network Disruptions on Evacuation},\
  booktitle =    {Proc. of the IEEE International Conference on Technologies for Homeland Security (HST)},\
  year =         {2015},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {},\
  address =      {Waltham, MA},\
  month =        {apr},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio40,\
  author =       {P.-C. Chang and <b>L. Fiondella</b> and Y.-K. Lin},\
  title =        {Confidence-based Reliability Modeling of a Stochastic-flow Production System},\
  booktitle =    {Proc. of International Conference on Mathematical Methods in Reliability},\
  year =         {2015},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {},\
  address =      {Tokyo, Japan},\
  month =        {jun},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio39,\
author={<b>L. Fiondella</b> and S.S. Gokhale and J.-H. Cui},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={Reliability Analysis of Underwater Sensor Network Packet Transmission},\
year={2015},\
month={jan},\
pages={770-776},\
address={Palm Harbor, FL},\
keywords={Energy consumption;Forward error correction;Measurement;Redundancy;Reliability theory;Routing;normalized energy consumption;packet forwarding;underwater sensor network},\
doi={10.1109/RAMS.2015.7105109},}\
@INPROCEEDINGS{cFio38,\
author={A.M. Neufelder and <b>L. Fiondella</b> and L. Gullo and H. Daughtrey},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={Advantages of IEEE P1633 for Practicing Software Reliability},\
year={2015},\
month={jan},\
pages={900-906},\
address={Palm Harbor, FL},\
keywords={Data models;Mathematical model;Predictive models;Software;Software reliability;Testing;IEEE P1633;IEEE standards;recommended practice;software reliability},\
doi={10.1109/RAMS.2015.7105145},}\
@INPROCEEDINGS{cFio37,\
author={B. Jafary and <b>L. Fiondella</b>},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={Correlated Consecutive 2-out-of-n Failed Systems},\
year={2015},\
month={jan},\
pages={844-849},\
address={Palm Harbor, FL},\
keywords={Analytical models;Correlation;Market research;Mathematical model;Measurement;Telecommunication network reliability;F;consecutive k-out-of-n;correlated component failure},\
doi={10.1109/RAMS.2015.7105186},}\
@INPROCEEDINGS{cFio36,\
author={V. Nagaraju and <b>L. Fiondella</b>},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={An Adaptive EM Algorithm for {NHPP} Software Reliability Models},\
year={2015},\
month={jan},\
pages={17-23},\
address={Palm Harbor, FL},\
keywords={Adaptation models;Mathematical model;Maximum likelihood estimation;Numerical models;Software algorithms;Software reliability;Expectation-Maximization algorithm;Non-homogeneous Poisson process;Software reliability},\
doi={10.1109/RAMS.2015.7105160},}\
@INPROCEEDINGS{cFio35,\
  author =       {R. El-Kharboutly and S.S. Gokhale and <b>L. Fiondella</b>},\
  title =        {Industry-wise Analysis of Security Breaches in Data Loss Incidents},\
  booktitle =    {Proc. of International Conference on Software Engineering and Knowledge Engineering (SEKE)},\
  year =         {2014},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {615-619},\
  address =      {Vancouver, Canada},\
  month =        {jul},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio34,\
  author =       {B. Jafary and <b>L. Fiondella</b>},\
  title =        {Continuous Reliability Models for Systems with Non-identically Distributed Correlated Components},\
  booktitle =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  year =         {2014},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {84-88},\
  address =      {Seattle, WA},\
  month =        {aug},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio33,\
  author =       {<b>L. Fiondella</b> and P. Zeephongsekul},\
  title =        {Discrete Software Reliability Growth Model based on Maximum Entropy Principle with Higher Order Polynomial Moment Constraints},\
  booktitle =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  year =         {2014},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {263-267},\
  address =      {Seattle, WA},\
  month =        {aug},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio32,\
author={<b>L. Fiondella</b> and R. El Kharboutly and S.S. Gokhale},\
booktitle={Proc. of IEEE International Conference on Cloud Engineering (IC2E)},\
title={Data Loss: {A}n Empirical Analysis in Search of Best Practices for Prevention},\
year={2014},\
month={mar},\
pages={355-360},\
address={Boston, MA},\
keywords={cloud computing;security of data;cloud computing;data loss;data migration;empirical analysis;enterprise wide data protection plan;information collection;information security;risk mitigation;Cloud computing;Government;Industries;Market research;Security;best practices;data loss prevention},\
doi={10.1109/IC2E.2014.11},}\
@INPROCEEDINGS{cFio31,\
author={J. Liu and Z. Wang and Z. Peng and J.-H. Cui and <b>L. Fiondella</b>},\
booktitle={Proc. of IEEE INFOCOM},\
title={Suave: {S}warm Underwater Autonomous Vehicle Localization},\
year={2014},\
month={apr},\
pages={64-72},\
address={Toronto, Canada},\
keywords={autonomous underwater vehicles;probability;swarm intelligence;AUV swarm;Suave algorithm;autonomous underwater vehicles;coordinated navigation;localization reference messages;location information;mobile underwater networks;moving currents;predetermined destination;rough waters;stealthy navigation;swarm detection probability;swarm underwater autonomous vehicle localization algorithm;turbulence;Accuracy;Acoustics;Computers;Conferences;Navigation;Uncertainty;Vehicles},\
doi={10.1109/INFOCOM.2014.6847925},}\
@INPROCEEDINGS{cFio30,\
author={<b>L. Fiondella</b> and P. Zeephongsekul},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={Recovery Block Fault Tolerance Considering Correlated Failures},\
year={2014},\
month={jan},\
pages={538-543},\
address={Colorado Springs, CO},\
keywords={software fault tolerance;system recovery;correlated failure;recovery block fault tolerance;reliability analysis;software fault tolerance method;system failure;Correlation;Equations;Fault tolerance;Mathematical model;Software;Software reliability;Software fault-tolerance;correlated failures;multivariate Bernoulli distribution;recovery block},\
doi={10.1109/RAMS.2014.6798525},}\
@INPROCEEDINGS{cFio29,\
author={R.B. Duffey and <b>L. Fiondella</b>},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={Learning Theory: {A} New Perspective for Reliability Testing Evaluation},\
year={2014},\
month={jan},\
pages={112-117},\
address={Colorado Springs, CO},\
keywords={software reliability;hardware reliability modeling;learning theory;mathematical models;procedure reliability modeling;procedure testing;reliability engineering;reliability testing evaluation;software reliability modeling;Hardware;Market research;Reliability theory;Software;Software reliability;Testing;Software reliability;hardware reliability;procedure reliability;reliability growth;tester learning},\
doi={10.1109/RAMS.2014.6798452},}\
@INPROCEEDINGS{cFio28,\
author={<b>L. Fiondella</b> and L. Xing},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={Reliability of Two Failure Mode Systems Subject to Correlated Failures},\
year={2014},\
month={jan},\
pages={23-28},\
address={Colorado Springs, CO},\
keywords={failure analysis;reliability;component failure mode systems;correlated failures;reliability analysis;Correlation;Educational institutions;Equations;Frequency modulation;Mathematical model;Reliability;Sensitivity analysis;Reliability block diagram;correlated failures;multiple failure modes;system cost},\
doi={10.1109/RAMS.2014.6798438},}\
@INPROCEEDINGS{cFio27,\
  AUTHOR =       {P.-C. Chang and Y.-K. Lin and <b>L. Fiondella</b>},\
  TITLE =        {Reliability Evaluation of Power Transmission Networks Considering Local Correlated Failures},\
  BOOKTITLE =    {Proc. of International Conference on Industrial Engineering Theory, Application and Practice},\
  YEAR =         {2013},\
  pages =        {1078-1083},\
  address =      {Busan, Korea},\
  month =        {oct},\
}\
@INPROCEEDINGS{cFio26,\
author={<b>L. Fiondella</b>},\
booktitle={Proc. of IEEE International Conference on Technologies for Homeland Security (HST)},\
title={An Algorithm to Prioritize Road Network Restoration After a Regional Event},\
year={2013},\
month={nov},\
pages={19-25},\
address = {Waltham, MA},\
keywords={emergency management;road traffic;transportation;average weighted vulnerability metric;earthquake;emergency planning tools;emergency response times;emergency response tools;emergency services;hurricane;network clearing strategy;network restoration;risk assessment process;road network restoration;transportation networks;Communities;Emergency services;Measurement;Planning;Roads;Time factors},\
doi={10.1109/THS.2013.6698970},}\
@INPROCEEDINGS{cFio25,\
author={<b>L. Fiondella</b> and S.S. Gokhale},\
booktitle={Proc. of International Symposium on Performance Evaluation of Computer and Telecommunication Systems (SPECTS)},\
title={Architecture-based Software Reliability with Error Propagation and Recovery},\
year={2013},\
month={jul},\
pages={38-45},\
address = {Toronto, Canada},\
keywords={software architecture;software reliability;system recovery;component failure;contemporary architecture-based software reliability analysis approach;error propagation;error recovery mechanisms;error recovery methods;model complexity;model scalability;system architecture;system components;system failure;system reliability;Reliability},}\
@INPROCEEDINGS{cFio24,\
author={<b>L. Fiondella</b> and S.S. Gokhale and V.B. Mendiratta},\
booktitle={Proc. of IEEE International Conference on Cloud Engineering (IC2E)},\
title={Cloud Incident Data: {A}n Empirical Analysis},\
year={2013},\
month={mar},\
pages={241-249},\
address={San Francisco, CA},\
keywords={cloud computing;AutoFail incidents;Cloutage.org database;automatic updates;cloud incident data;cloud services;empirical analysis;organizational boundaries;service availability;Analytical models;Computer hacking;Google;Market research;Mathematical model;Organizations;Polynomials;availability;cloud computing;incident report database;outages},\
doi={10.1109/IC2E.2013.28},}\
@INPROCEEDINGS{cFio23,\
author={S. Tolba and <b>L. Fiondella</b> and R.A. Ammar and S. Rajasekaran and N.E. Lownes and J. Ivan},\
booktitle={Proc. of IEEE Conference on Technologies for Homeland Security (HST)},\
title={{VDPA}: {A} {WSN} Deployment and Analysis Tool for Road Network Security},\
year={2012},\
month={nov},\
pages={495-501},\
address={Waltham, MA},\
keywords={military computing;national security;performance evaluation;road safety;routing protocols;sensor placement;telecommunication computing;wireless sensor networks;VDPA;WSN deployment;advanced sensing technology;city tailored Wireless Sensor Network;comprehensive framework;deployment plans;homeland security;national security;road network security;routing protocols;virtual deployment and performance analysis tool;Algorithm design and analysis;Cities and towns;Performance evaluation;Roads;Routing protocols;Sensors;Wireless sensor networks;Modeling and simulation;Routing protocols;Software tool;Technology deployment;Wireless Sensor Networks},\
doi={10.1109/THS.2012.6459898},}\
@INPROCEEDINGS{cFio22,\
author={A. Rahman and N.E. Lownes and J. Ivan and <b>L. Fiondella</b> and S. Rajasekaran and R.A. Ammar},\
booktitle={Proc. of IEEE Conference on Technologies for Homeland Security (HST)},\
title={A Game Theory Approach to Identify Alternative Regulatory Frameworks for Hazardous Materials Routing},\
year={2012},\
month={nov},\
pages={489-494},\
address={Waltham, MA},\
keywords={design;game theory;hazardous materials;health and safety;risk management;vehicle routing;alternative regulatory framework;disaster preparation;environmental risk;hazardous materials;hazmat carrier payoff;hazmat transportation vehicle routing;health risk;nonzero sum game theory;risk path minimization;routing scheme design;terrorist attack;vulnerable link identification;Games;Hazardous materials;Routing;Sociology;Statistics;Terrorism;Transportation;game theory;hazardous materials;routing;terrorist attack;vulnerability},\
doi={10.1109/THS.2012.6459897},}\
@INPROCEEDINGS{cFio21,\
author={J. Liu and <b>L. Fiondella</b> and X. Han and R.A. Ammar and S. Rajasekaran and N.E. Lownes and J. Ivan},\
booktitle={Proc. of IEEE Conference on Technologies for Homeland Security (HST)},\
title={Smart Phone Assisted City-scale Wireless Sensor Network Deployment for Transportation System Monitoring},\
year={2012},\
month={nov},\
pages={411-416},\
address={Waltham, MA},\
keywords={ad hoc networks;mobile handsets;national security;optimisation;telecommunication security;traffic engineering computing;transportation;travel industry;wireless sensor networks;ad hoc networks;homeland security agency;optimization;smart phone assisted city-scale wireless sensor network deployment;terrorist plot;traffic flow;transportation network security;transportation system monitoring;Cities and towns;Delay;Intelligent sensors;Roads;Routing;Smart phones},\
doi={10.1109/THS.2012.6459884},}\
@INPROCEEDINGS{cFio20,\
author={<b>L. Fiondella</b> and S.S. Gokhale and N.E. Lownes and M. Accorsi},\
booktitle={Proc. of IEEE Conference on Technologies for Homeland Security (HST)},\
title={Security and Performance Analysis of a Passenger Screening Checkpoint for Mass-transit Systems},\
year={2012},\
month={nov},\
pages={312-318},\
address={Waltham, MA. <b><font size "3" color="red">Best Paper Award, Attack and Disaster Preparation, Recovery and Response Track</font></b>},\
keywords={national security;railway safety;terrorism;homeland security;mass transportation;masstransit systems;passenger screening checkpoint;Analytical models;Layout;Measurement;Terrorism;Throughput;Transportation;mass-transit;passenger screening;performance;security},\
doi={10.1109/THS.2012.6459867},}\
@INPROCEEDINGS{cFio19,\
author={<b>L. Fiondella</b> and J. Liu and S. Tolba and S. Rajasekaran and R.A. Ammar and A. Rahman and N. Lownes and J. Ivan},\
booktitle={Proc. of IEEE Conference on Technologies for Homeland Security (HST)},\
title={Game Theoretic Vulnerability Analysis for the Optimal Defense of High Speed Rail},\
year={2012},\
month={nov},\
pages={305-311},\
address={Waltham, MA},\
keywords={game theory;genetic algorithms;railway engineering;railway safety;US High Speed Rail Association;finite defensive resources;game theoretic vulnerability analysis;genetic algorithm;national economy;natural disasters;network vulnerability;terrorist threats;transportation infrastructure;Biological cells;Cities and towns;Games;Genetic algorithms;Rails;Sociology;Statistics},\
doi={10.1109/THS.2012.6459866},}\
@INPROCEEDINGS{cFio18,\
  author =       {<b>L. Fiondella</b> and C. Li},\
  title =        {Reliability Design Confidence for Systems Subject to Correlated Component Failures},\
  booktitle =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  year =         {2012},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {330-334},\
  address =      {Boston, MA},\
  month =        {jul},\
  organization = {},\
  publisher =    {},\
  note =         {},\
  abstract =     {},\
  keywords =     {},\
}\
@INPROCEEDINGS{cFio17,\
  AUTHOR =       {K. Severin and C. Spinner and M. Calvo and D. Doran and <b>L. Fiondella</b>},\
  TITLE =        {Reliability and Performance Assessment of an Aviation Security Screening Checkpoint},\
  BOOKTITLE =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  YEAR =         {2012},\
  editor =       {},\
  volume =       {},\
  number =       {},\
  series =       {},\
  pages =        {364-368},\
  address =      {Boston, MA},\
  month =        {jul},\
  organization = {},\
}\
@INPROCEEDINGS{cFio16,\
author={S. Tolba and <b>L. Fiondella</b> and R.A. Ammar and N.E. Lownes and S. Rajasekaran and J. Ivan and Q. Wang},\
booktitle={Proc. of IEEE International Conference on Technologies for Homeland Security (HST)},\
title={Modeling Attacker-technology System Interaction in Transportation Networks: ${P}^{2}{I}^{3}$-model},\
year={2011},\
month={nov},\
pages={306-312},\
address = {Waltham, MA},\
keywords={national security;terrorism;transportation;HS-Agency-perception;P2I3-model;attacker-perception;attacker-technology system interaction modelling;deployment;homeland security agency;intelligence efforts;perception square interaction cube model;protection planning;real-world submodels;strategic policy revision activities;system dynamics approach;system uncertainties;terrorists;transportation networks;Mathematical model;Organizations;Planning;Psychology;Terrorism;Transportation;Uncertainty},\
doi={10.1109/THS.2011.6107888},}\
@INPROCEEDINGS{cFio15,\
author={Q. Wang and <b>L. Fiondella</b> and N.E. Lownes and J. Ivan and R.A. Ammar and S. Rajasekaran and S. Tolba},\
booktitle={Proc. of IEEE International Conference on Technologies for Homeland Security (HST)},\
title={Integrating Equilibrium Assignment in Game-theoretic Approach to Measure Many-to-many Transportation Network Vulnerability},\
year={2011},\
month={nov},\
pages={351-357},\
address = {Waltham, MA},\
keywords={network routing;organisational aspects;stochastic games;terrorism;transportation;MSA;Sioux Fall network;alternative paths;game-theoretic approach;high-volume edges;many-to-many transportation network vulnerability;method of successive averages;network performance;origin-destination pairs;routing probabilities computing;stochastic game theoretic approach;system vulnerability;terrorist organization;transportation management agency;transportation networks;user-equilibrium assignment;vulnerable links;Computational modeling;Game theory;Games;Mathematical model;Probability;Terrorism;Transportation;game theory;user-equilibrium;vulnerability},\
doi={10.1109/THS.2011.6107895},}\
@INPROCEEDINGS{cFio14,\
author={<b>L. Fiondella</b> and S. Rajasekaran and S.S. Gokhale},\
booktitle={Proc. of IEEE International Symposium on High-Assurance Systems Engineering (HASE)},\
title={Efficient System Reliability with Correlated Component Failures},\
year={2011},\
month={nov},\
pages={269-276},\
address = {Boca Raton, FL},\
keywords={software reliability;correlated component failures;efficient system reliability;reliability analysis;Analytical models;Correlation;Encoding;Equations;Joints;Mathematical model;Reliability},\
doi={10.1109/HASE.2011.31},\
ISSN={1530-2059},}\
@INPROCEEDINGS{cFio13,\
  AUTHOR =       {<b>L. Fiondella</b> and P. Zeephongsekul},\
  TITLE =        {{R}eliability of Systems with Identically Distributed Correlated Components},\
  BOOKTITLE =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  YEAR =         {2011},\
  pages =        {26-30},\
  address =      {Vancouver, CA. <b><font size "3" color="red">Best Paper Award</font></b>},\
  month =        {aug},\
}\
@inproceedings{cFio12,\
       author = {D. Doran and M. Tran and <b>L. Fiondella</b> and S.S. Gokhale},\
       title = {{A}rchitecture-based Reliability Analysis with Uncertain Parameters},\
       booktitle = {Proc. of International Conference on Software Engineering and Knowledge Engineering (SEKE)},\
       pages = {629-634},\
       address = {Miami Beach, FL},\
       month = {jul},\
       year = 2011}\
@INPROCEEDINGS{cFio11,\
author={<b>L. Fiondella</b> and S.S. Gokhale},\
booktitle={Proc. of Annual Reliability and Maintainability Symposium (RAMS)},\
title={Software Reliability Model with Bathtub-shaped Fault Detection Rate},\
year={2011},\
month={jan},\
pages={Session 9D-2},\
address={Orlando, FL. <b><font size "3" color="red">Second Place in Tom Fagan Student Paper Competition</font></b>},\
keywords={mean square error methods;program testing;software reliability;Akaike information criterion;bathtub-shaped fault detection rate;burn-in model;code comprehension;fault detection rate;functional requirements testing;predictive mean square error;software reliability model;software testing process;Data models;Fault detection;Mathematical model;Predictive models;Software;Software reliability;Testing;bathtub distribution;fault detection rate;software reliability},\
doi={10.1109/RAMS.2011.5754490},\
ISSN={0149-144X},}\
@INPROCEEDINGS{cFio10,\
  AUTHOR =       {<b>L. Fiondella</b>},\
  TITLE =        {{R}eliability Analysis of Systems with Negatively Correlated Components},\
  BOOKTITLE =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  YEAR =         {2010},\
  pages =        {169-173},\
  address =      {Washington, D.C.},\
  month =        {aug},\
}\
@INPROCEEDINGS{cFio9,\
  AUTHOR =       {<b>L. Fiondella</b> and S.S. Gokhale},\
  TITLE =        {{R}esource Allocation for a Modular Software System},\
  BOOKTITLE =    {Proc. of International Conference on Software Engineering and Knowledge Engineering (SEKE)},\
  YEAR =         {2009},\
  pages =        {480-486},\
  address =      {Boston, MA},\
  month =        {jul},\
}\
@INPROCEEDINGS{cFio8,\
  AUTHOR =       {<b>L. Fiondella</b>},\
  TITLE =        {{J}oint Distribution Decomposition for the Reliability Analysis of Systems with Correlated Failures},\
  BOOKTITLE =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  YEAR =         {2009},\
  pages =        {275-279},\
  address =      {San Francisco, CA},\
  month =        {aug},\
}\
@INPROCEEDINGS{cFio7,\
  AUTHOR =       {<b>L. Fiondella</b>},\
  TITLE =        {{J}oint Confidence Bounds for the Performance Distribution of a Multi-state System},\
  BOOKTITLE =    {Proc. of ISSAT International Conference on Reliability and Quality in Design},\
  YEAR =         {2009},\
  pages =        {54-58},\
  address =      {San Francisco, CA},\
  month =        {aug},\
}\
@INPROCEEDINGS{cFio6,\
  AUTHOR =       {<b>L. Fiondella</b> and S.S. Gokhale},\
  TITLE =        {{A}chieving Software Reliability Target with Minimal Effort},\
  BOOKTITLE =    {Proc. of International Conference on Decision Sciences in Global Enterprise Management},\
  YEAR =         {2009},\
  pages =        {},\
  address =      {Bombay, India. <b><font size "3" color="red">Best Paper Award</font></b>},\
  month =        {jan},\
}\
@INPROCEEDINGS{cFio5,\
author={<b>L. Fiondella</b> and S.S. Gokhale},\
booktitle={Proc. of International Conference on Quality Software (QSIC)},\
title={Importance Measures for a Modular Software System},\
year={2008},\
month={aug},\
pages={338-343},\
address = {Oxford, U.K.},\
keywords={object-oriented programming;resource allocation;software metrics;software reliability;European Space Agency;component reliability;electromechanical systems;importance measures;modular software system;resource allocation;sensitivity analysis;system reliability;Application software;Costs;Hardware;Phase measurement;Reliability engineering;Resource management;Sensitivity analysis;Software measurement;Software systems;Systems engineering and theory;importance assessment;software architecture;software reliability;uncertainty},\
doi={10.1109/QSIC.2008.42},\
ISSN={1550-6002},}\
@INPROCEEDINGS{cFio4,\
author={<b>L. Fiondella</b> and S.S. Gokhale},\
booktitle={Proc. of IEEE International Symposium on Parallel and Distributed Processing (IPDPS)},\
title={Software Reliability with Architectural Uncertainties},\
year={2008},\
month={apr},\
pages={1-5},\
address={Miami, FL},\
keywords={software architecture;software reliability;architectural parameter;multinomial distribution;software architectural uncertainties;software reliability;uncertain component reliabilities;Application software;Availability;Computer architecture;Computer science;Life estimation;Reliability engineering;Software reliability;Software systems;Testing;Uncertainty},\
doi={10.1109/IPDPS.2008.4536436},\
ISSN={1530-2075},}\
@INPROCEEDINGS{cFio3,\
  AUTHOR =       {<b>L. Fiondella</b> and S.S. Gokhale},\
  TITLE =        {Quantifying the Impact of Architectural Uncertainties on System Reliability},\
  BOOKTITLE =    {Proc. of IASTED International Conference on Software Engineering and Applications (SEA)},\
  YEAR =         {2007},\
  pages =        {85-90},\
  address =      {Cambridge, MA},\
  month =        {nov},\
}\
@INPROCEEDINGS{cFio2,\
  AUTHOR =       {<b>L. Fiondella</b> and S.S. Gokhale},\
  TITLE =        {Adequacy of Composite Parametric Software Reliability Models},\
  BOOKTITLE =    {Proc. of International Conference on Software Engineering and Knowledge Engineering (SEKE)},\
  YEAR =         {2007},\
  pages =        {643-648},\
  address =      {Boston, MA},\
  month =        {jul},\
  organization = {Knowledge Systems Institute},\
}\
@INPROCEEDINGS{cFio1,\
  AUTHOR =       "<b>L. Fiondella</b> and S.S. Gokhale",\
  TITLE =        "Estimating Component Reliabilities To Achieve Application Reliability Targets",\
  BOOKTITLE =    "Proc. of International Conference on Reliability and Safety Engineering",\
  YEAR =         "2005",\
  pages =        "",\
  address =      "Bhubaneswar, India",\
  month =        "dec",\
}'

	}

	getbib(){
		this.parsedbib = parser(this.bibliographies)
		console.log(this.parsedbib)
		return this.parsedbib;
	}
}